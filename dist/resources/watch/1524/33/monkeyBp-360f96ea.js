import { aA as isFunction } from './calfSystem-cc2b30b5.js';

let bp;

function getBackpack() { // jQuery
  if (!bp) {
    bp = $('#backpackContainer').data('hcsBackpack');
  }
  return bp;
}

const patchList = [];
let monkeyInstalled;

function runPatches(theBackpack) {
  if (patchList.length > 0) {
    patchList.forEach((fn) => fn(theBackpack));
  }
}

function installMonkey(theBackpack) {
  const oldShow = theBackpack._showPage;
  // eslint-disable-next-line no-param-reassign
  theBackpack._showPage = function _showPage(type, page) {
    if (!theBackpack.tabData) { return; }
    oldShow.call(theBackpack, type, page);
    runPatches(theBackpack);
  };
  monkeyInstalled = true;
}

function monkeyBp(theBackpack, fn) {
  if (patchList.includes(fn)) { return; }
  if (!monkeyInstalled) { installMonkey(theBackpack); }
  if (isFunction(fn)) { patchList.push(fn); }
}

export { getBackpack as g, monkeyBp as m };
//# sourceMappingURL=monkeyBp-360f96ea.js.map
