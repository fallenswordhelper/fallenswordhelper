import { aM as isFunction } from './calfSystem-02fd040d.js';

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
//# sourceMappingURL=monkeyBp-f4b12253.js.map
