import equipItem from '../../ajax/equipItem';
import useItem from '../../ajax/useItem';
import sendEvent from '../../analytics/sendEvent';
import hasClass from '../../common/hasClass';
import setText from '../../dom/setText';
import updateEquipment from '../updateEquipment';
import updateStatistics from '../updateStatistics';


function actionResult(data, target) {
  if (data.r !== 0) {
    target.remove();
    return;
  }
  $('#backpackContainer').data('hcsBackpack')._loadData();
  updateEquipment();
  updateStatistics();
}

async function fastAction(theBackpack, evt, action, result) {
  sendEvent('profile', `fastAction - ${result}`);
  const { target } = evt;
  const invId = target.parentNode.parentNode.children[0].dataset.inv;
  setText('', target);
  target.blur();
  target.className = 'fastAction fshBl fshSpinner fshSpinner12';
  const data = await action(invId);
  if (data) actionResult(data, target);
}

export default function fastEvent(theBackpack, evt) {
  if (hasClass('fastWear', evt.target)) {
    fastAction(theBackpack, evt, equipItem, 'Worn');
  }
  if (hasClass('fastUse', evt.target)) {
    fastAction(theBackpack, evt, useItem, 'Used');
  }
}
