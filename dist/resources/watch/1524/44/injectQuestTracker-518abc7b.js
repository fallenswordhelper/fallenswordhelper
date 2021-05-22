import { I as getValue, g as getElementsByTagName, p as pCC, C as getText, f as insertHtmlBeforeEnd, S as getUrlParameter } from './calfSystem-23094c64.js';
import { g as guideButtons } from './guideButtons-62ac8698.js';

function updateBackHref() {
  const lastActiveQuestPage = getValue('lastActiveQuestPage');
  if (lastActiveQuestPage.length > 0) {
    getElementsByTagName('a', pCC)[0].href = lastActiveQuestPage;
  }
}

function injectGuideButtons() {
  const injectHere = getElementsByTagName('td', pCC)[0];
  const questName = getText(getElementsByTagName('font', injectHere)[1])
    .replace(/"/g, '');
  insertHtmlBeforeEnd(injectHere,
    guideButtons(getUrlParameter('quest_id'), questName));
}

function injectQuestTracker() {
  updateBackHref();
  injectGuideButtons();
}

export default injectQuestTracker;
//# sourceMappingURL=injectQuestTracker-518abc7b.js.map
