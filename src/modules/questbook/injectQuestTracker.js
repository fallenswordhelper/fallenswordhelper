import getElementsByTagName from '../common/getElementsByTagName';
import getText from '../common/getText';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import onclick from '../common/onclick';
import { pcc } from '../support/layout';
import getUrlParameter from '../system/getUrlParameter';
import getValue from '../system/getValue';
import guideButtons from './guideButtons';
import questEvent from './questEvent';

function updateBackHref() {
  const lastActiveQuestPage = getValue('lastActiveQuestPage');
  if (lastActiveQuestPage.length > 0) {
    getElementsByTagName('a', pcc())[0].href = lastActiveQuestPage;
  }
}

function injectGuideButtons() {
  const injectHere = getElementsByTagName('td', pcc())[0];
  const questName = getText(getElementsByTagName('font', injectHere)[1])
    .replace(/"/g, '');
  insertHtmlBeforeEnd(injectHere, guideButtons(getUrlParameter('quest_id'), questName));
  onclick(injectHere, questEvent('Quest Tracker'));
}

export default function injectQuestTracker() {
  updateBackHref();
  injectGuideButtons();
}
