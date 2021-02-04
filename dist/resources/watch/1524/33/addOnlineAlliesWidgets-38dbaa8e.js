import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-18c2e2dc.js';
import { y as getElementById } from './calfSystem-cc2b30b5.js';
import './getArrayByClassName-b85e26fa.js';
import './hideElement-eb117e0e.js';
import './openQuickBuffByName-9466cf44.js';
import './fshOpen-946a9f05.js';
import './selfIdIs-3252f988.js';

function alliesColour(el) {
  contactColour(el, {
    l1: 'fshDodgerBlue',
    l2: 'fshLightSkyBlue',
    l3: 'fshPowderBlue',
  });
}

function addOnlineAlliesWidgets() {
  const onlineAlliesList = getElementById('minibox-allies-list');
  if (!onlineAlliesList) { return; }
  doHideBtn(onlineAlliesList, 2);
  doHideBuffSelected(onlineAlliesList, 'ally');
  // add coloring for offline time
  colouring(onlineAlliesList, alliesColour);
}

export default addOnlineAlliesWidgets;
//# sourceMappingURL=addOnlineAlliesWidgets-38dbaa8e.js.map
