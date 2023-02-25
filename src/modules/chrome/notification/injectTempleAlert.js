import indexAjaxData from '../../ajax/indexAjaxData';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import calf from '../../support/calf';
import { now } from '../../support/now';
import getValue from '../../system/getValue';
import displayDisconnectedFromGodsMessage from './displayDisconnectedFromGodsMessage';
import parseTemplePage from './parseTemplePage';

function checkLastUpdate(templeAlertLastUpdate) {
  return !templeAlertLastUpdate || now() > templeAlertLastUpdate;
}

async function doWeNeedToParse() {
  if (checkLastUpdate(getValue('lastTempleCheck'))) {
    const data = await indexAjaxData({ cmd: 'temple' });
    parseTemplePage(data);
  } else if (getValue('needToPray')) {
    displayDisconnectedFromGodsMessage();
  }
}

export default function injectTempleAlert() { // jQuery
  // Checks to see if the temple is open for business.
  if (calf.cmd === 'temple' || jQueryNotPresent()) { return; }
  doWeNeedToParse();
}
