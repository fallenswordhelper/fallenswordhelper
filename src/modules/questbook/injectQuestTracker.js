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

function getQuestName(injectHere) {
  const fonts = getElementsByTagName('font', injectHere);
  if (fonts.length !== 2) return '';
  return getText(fonts[1]).replace(/"/g, '');
}

function injectGuideButtons() {
  const injectHere = getElementsByTagName('td', pcc())[0];
  insertHtmlBeforeEnd(
    injectHere,
    guideButtons(getUrlParameter('quest_id'), getQuestName(injectHere)),
  );
  onclick(injectHere, questEvent('Quest Tracker'));
}

export default function injectQuestTracker() {
  if (!pcc()) return;
  updateBackHref();
  injectGuideButtons();
}
