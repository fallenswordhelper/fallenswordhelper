import { G as getValue, g as getElementsByTagName, p as pCC, B as getText, f as insertHtmlBeforeEnd, R as getUrlParameter } from './calfSystem-21d16a0e.js';
import { g as guideButtons } from './guideButtons-ee1f2026.js';

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
//# sourceMappingURL=injectQuestTracker-f6cad3f0.js.map
