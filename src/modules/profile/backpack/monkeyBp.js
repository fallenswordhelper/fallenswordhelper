import isFunction from '../../common/isFunction';

const patchList = [];
let monkeyInstalled = 0;

function runPatches(theBackpack) {
  if (patchList.length > 0) {
    patchList.forEach((fn) => fn(theBackpack));
  }
}

function installMonkey(theBackpack) {
  const oldShow = theBackpack._showPage;
  theBackpack._showPage = function _showPage(type, page) {
    if (!theBackpack.tabData) {
      return;
    }
    oldShow.call(theBackpack, type, page);
    runPatches(theBackpack);
  };
  monkeyInstalled = true;
}

export default function monkeyBp(theBackpack, fn) {
  if (patchList.includes(fn)) {
    return;
  }
  if (!monkeyInstalled) {
    installMonkey(theBackpack);
  }
  if (isFunction(fn)) {
    patchList.push(fn);
  }
}
