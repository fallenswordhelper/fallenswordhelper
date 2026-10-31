import equipItem from '../../ajax/equipItem';
import useItem from '../../ajax/useItem';
import sendEvent from '../../analytics/sendEvent';
import hasClass from '../../common/hasClass';
import setInnerHtml from '../../dom/setInnerHtml';
import setText from '../../dom/setText';

function backpackRemove(theBackpack, invId) {
  // remove from srcData
  const i = theBackpack.srcData.findIndex((el) => String(el.a) === invId);
  if (i !== -1) {
    theBackpack.srcData.splice(i, 1);
  }
}

// The item has left the backpack, so stop the game clicking or selecting it.
function disableSlot(theBackpack, target) {
  const slot = target.closest('.backpackSlot');
  if (!slot) return;
  slot.classList.add('fastDone');
  slot.querySelector('.backpackCheckbox')?.remove();
  const selected = slot.querySelector('.backpack-selected');
  if (selected) {
    selected.classList.remove('backpack-selected');
    theBackpack.selectedCount -= 1;
    theBackpack._updateMultiOptions();
  }
}

function actionResult([theBackpack, result, target, invId, data]) {
  if (data.r !== 0) {
    target.remove();
    return;
  }
  backpackRemove(theBackpack, invId);
  disableSlot(theBackpack, target);
  target.classList.remove('fshSpinner');
  setInnerHtml(`<span class="fastWorn">${result}</span>`, target.parentNode);
}

async function fastAction(theBackpack, evt, action, result) {
  sendEvent('profile', `fastAction - ${result}`);
  const { target } = evt;
  const invId = target.parentNode.parentNode.children[0].dataset.inv;
  setText('', target);
  target.blur();
  target.className = 'fastAction fshBl fshSpinner fshSpinner12';
  const data = await action(invId);
  if (data) actionResult([theBackpack, result, target, invId, data]);
}

export default function fastEvent(theBackpack, evt) {
  if (hasClass('fastWear', evt.target)) {
    fastAction(theBackpack, evt, equipItem, 'Worn');
  }
  if (hasClass('fastUse', evt.target)) {
    fastAction(theBackpack, evt, useItem, 'Used');
  }
}
