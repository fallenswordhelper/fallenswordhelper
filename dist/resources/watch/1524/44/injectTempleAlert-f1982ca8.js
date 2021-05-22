import { c as calf, y as jQueryNotPresent, a6 as now, I as getValue, u as indexAjaxData, bS as parseTemplePage, bT as displayDisconnectedFromGodsMessage } from './calfSystem-23094c64.js';

function checkLastUpdate(templeAlertLastUpdate) {
  return !templeAlertLastUpdate || now > templeAlertLastUpdate;
}

function doWeNeedToParse() {
  if (checkLastUpdate(getValue('lastTempleCheck'))) {
    indexAjaxData({ cmd: 'temple' }).then(parseTemplePage);
  } else if (getValue('needToPray')) {
    displayDisconnectedFromGodsMessage();
  }
}

function injectTempleAlert() { // jQuery
  // Checks to see if the temple is open for business.
  if (calf.cmd === 'temple' || jQueryNotPresent()) { return; }
  doWeNeedToParse();
}

export default injectTempleAlert;
//# sourceMappingURL=injectTempleAlert-f1982ca8.js.map
