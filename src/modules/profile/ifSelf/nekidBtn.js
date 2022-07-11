import daUnequipItem from '../../_dataAccess/daUnequipItem';
import sendEvent from '../../analytics/sendEvent';
import createButton from '../../common/cElement/createButton';
import createDiv from '../../common/cElement/createDiv';
import getArrayByTagName from '../../common/getArrayByTagName';
import getElementById from '../../common/getElementById';
import insertElement from '../../common/insertElement';
import insertTextBeforeEnd from '../../common/insertTextBeforeEnd';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import setInnerHtml from '../../dom/setInnerHtml';

let profileCombatSetDiv = 0;

function clearBox(link, json) {
  if (json && json.s) {
    setInnerHtml('', link.parentNode);
  }
}

function removeItem(link) {
  const item = regExpFirstCapture(/inventory_id=(?<id>\d+)/, link.href);
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
  profileCombatSetDiv = getElementById('profileCombatSetDiv');
  if (!profileCombatSetDiv) { return; }
  const targetBr = profileCombatSetDiv.parentNode.nextElementSibling;
  const nekidDiv = makeButton();
  getElementById('profileRightColumn').replaceChild(nekidDiv, targetBr);
}
