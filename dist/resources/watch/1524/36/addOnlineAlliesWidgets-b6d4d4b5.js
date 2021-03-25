import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-5dfeadec.js';
import { z as getElementById } from './calfSystem-c08399e5.js';
import './getArrayByClassName-41ca127b.js';
import './hideElement-f0e898f0.js';
import './openQuickBuffByName-2ba6a39d.js';
import './fshOpen-6a6a1b65.js';
import './selfIdIs-12fc7829.js';

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
//# sourceMappingURL=addOnlineAlliesWidgets-b6d4d4b5.js.map
