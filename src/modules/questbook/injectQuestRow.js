import dataRows from '../common/dataRows';
import getTextTrim from '../common/getTextTrim';
import hideElement from '../common/hideElement';
import partial from '../common/partial';
import replaceDoubleSpace from '../common/replaceDoubleSpace';
import setInnerHtml from '../dom/setInnerHtml';
import getCustomUrlParameter from '../system/getCustomUrlParameter';
import getValue from '../system/getValue';
import shouldBeArray from '../system/shouldBeArray';
import guideButtons from './guideButtons';

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
  const questID = getCustomUrlParameter(aRow.cells[0].children[0].href, 'quest_id');
  setInnerHtml(guideButtons(questID, questName), aRow.cells[4]);
}

export default function injectQuestRow(questTable) {
  const questsToHide = isHideQuests();
  dataRows(questTable, 5, 0).forEach(partial(decorate, questsToHide));
}
