import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-8c9c4767.js';
import { z as getElementById } from './calfSystem-02fd040d.js';
import './getArrayByClassName-bfd9e53d.js';
import './hideElement-53ec58d4.js';
import './openQuickBuffByName-2e9d4b7d.js';
import './fshOpen-d0a5bbc1.js';
import './selfIdIs-4903e2df.js';

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
//# sourceMappingURL=addOnlineAlliesWidgets-010e5c90.js.map
