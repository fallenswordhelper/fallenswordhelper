import getElementsByTagName from '../common/getElementsByTagName';
import { getPcc } from '../support/layout';
import getText from '../common/getText';
import getUrlParameter from '../system/getUrlParameter';
import getValue from '../system/getValue';
import guideButtons from './guideButtons';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';

function updateBackHref() {
  const lastActiveQuestPage = getValue('lastActiveQuestPage');
  if (lastActiveQuestPage.length > 0) {
    getElementsByTagName('a', getPcc())[0].href = lastActiveQuestPage;
  }
}

function injectGuideButtons() {
  const injectHere = getElementsByTagName('td', getPcc())[0];
  const questName = getText(getElementsByTagName('font', injectHere)[1])
    .replace(/"/g, '');
  insertHtmlBeforeEnd(injectHere, guideButtons(getUrlParameter('quest_id'), questName));
}

export default function injectQuestTracker() {
  updateBackHref();
  injectGuideButtons();
}
