import createButton from '../../common/cElement/createButton';
import createDiv from '../../common/cElement/createDiv';
import daUnequipItem from '../../_dataAccess/daUnequipItem';
import getArrayByTagName from '../../common/getArrayByTagName';
import getElementById from '../../common/getElement';
import insertElement from '../../common/insertElement';
import insertTextBeforeEnd from '../../common/insertTextBeforeEnd';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import sendEvent from '../../analytics/sendEvent';
import setInnerHtml from '../../dom/setInnerHtml';

let profileCombatSetDiv;

function clearBox(link, json) {
  if (json && json.s) {
    setInnerHtml('', link.parentNode);
  }
}

function removeItem(link) {
  const item = /inventory_id=(\d+)/.exec(link.href)[1];
  if (item) {
    daUnequipItem(item).then(partial(clearBox, link));
  }
}

function getNekid() {
  sendEvent('profile', 'nekidBtn');
  const profileBlock = profileCombatSetDiv.nextElementSibling;
  getArrayByTagName('a', profileBlock).forEach(removeItem);
}

function makeButton() {
  const nekidDiv = createDiv({ className: 'fshCenter' });
  const theBtn = createButton({
    className: 'fshBl fshBls',
    textContent: 'Nekid',
  });
  insertTextBeforeEnd(nekidDiv, '[ ');
  insertElement(nekidDiv, theBtn);
  insertTextBeforeEnd(nekidDiv, ' ]');
  onclick(theBtn, getNekid);
  return nekidDiv;
}

export default function nekidBtn() {
  const profileRightColumn = getElementById('profileRightColumn');
  profileCombatSetDiv = getElementById('profileCombatSetDiv');
  const targetBr = profileCombatSetDiv.parentNode.nextElementSibling;
  const nekidDiv = makeButton();
  profileRightColumn.replaceChild(nekidDiv, targetBr);
}
