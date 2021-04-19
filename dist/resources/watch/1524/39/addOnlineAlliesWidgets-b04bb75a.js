import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-3a429f6a.js';
import { z as getElementById } from './calfSystem-d5c49dc8.js';
import './getArrayByClassName-ed0c6e83.js';
import './hideElement-d197c06b.js';
import './openQuickBuffByName-cf6100f7.js';
import './fshOpen-bc09bf81.js';
import './selfIdIs-d35ad641.js';

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
//# sourceMappingURL=addOnlineAlliesWidgets-b04bb75a.js.map
