import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-6d6801b1.js';
import { y as getElementById } from './calfSystem-d1de1997.js';
import './getArrayByClassName-9d3853c0.js';
import './hideElement-7b9c883f.js';
import './openQuickBuffByName-4d416c22.js';
import './fshOpen-49538a62.js';
import './selfIdIs-9289fbc8.js';

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
//# sourceMappingURL=addOnlineAlliesWidgets-c7b4e9d6.js.map
