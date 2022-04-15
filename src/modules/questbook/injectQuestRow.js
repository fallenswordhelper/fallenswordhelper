import dataRows from '../common/dataRows';
import getTextTrim from '../common/getTextTrim';
import getValue from '../system/getValue';
import guideButtons from './guideButtons';
import hideElement from '../common/hideElement';
import partial from '../common/partial';
import replaceDoubleSpace from '../common/replaceDoubleSpace';
import setInnerHtml from '../dom/setInnerHtml';
import shouldBeArray from '../system/shouldBeArray';

function isHideQuests() {
  if (getValue('hideQuests')) {
    return shouldBeArray('hideQuestNames');
  }
  return [];
}

function doHideQuests(hideQuests, questName, aRow) {
  if (hideQuests.includes(questName)) {
    let target = aRow;
    hideElement(target);
    for (let i = 0; i < 3; i++) {
      target = target.nextElementSibling;
      hideElement(target);
    }
  }
}

function decorate(questsToHide, aRow) {
  const questName = replaceDoubleSpace(getTextTrim(aRow.cells[0]));
  doHideQuests(questsToHide, questName, aRow);
  const questID = /quest_id=(\d+)/.exec(aRow.cells[4].innerHTML)[1];
  setInnerHtml(guideButtons(questID, questName), aRow.cells[4]);
}

export default function injectQuestRow(questTable) {
  const questsToHide = isHideQuests();
  dataRows(questTable, 5, 0).forEach(partial(decorate, questsToHide));
}
