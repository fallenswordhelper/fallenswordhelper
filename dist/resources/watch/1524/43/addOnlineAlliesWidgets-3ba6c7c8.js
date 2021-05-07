import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-c81a78bf.js';
import { z as getElementById } from './calfSystem-476ab75d.js';
import './getArrayByClassName-4f67343e.js';
import './hideElement-0d0f9065.js';
import './openQuickBuffByName-6e48651f.js';
import './fshOpen-72d27290.js';
import './selfIdIs-58c69d52.js';

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
//# sourceMappingURL=addOnlineAlliesWidgets-3ba6c7c8.js.map
