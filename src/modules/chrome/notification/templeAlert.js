import './templeAlert.css';
import daTemplePray from '../../_dataAccess/daTemplePray';
import daTempleView from '../../_dataAccess/daTempleView';
import sendEvent from '../../analytics/sendEvent';
import getElementById from '../../common/getElementById';
import hideQTip from '../../common/hideQTip';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import once from '../../common/once';
import parseTemplePage from '../../common/parseTemplePage';
import calf from '../../support/calf';
import { cmdUrl } from '../../support/constants';
import { now } from '../../support/now';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';

let helperPrayToGods = Element;

const havePrayedMsg =
  '<span class="notification-icon"></span>' +
  '<p class="notification-content">' +
  'You are currently praying at the temple.</p>';
const godsNotification =
  '<li class="notification">' +
  '<span id="helperPrayToGods" class="fastPray">' +
  '<table><tbody><tr><td>' +
  '<span class="fshTempleZero" data-tooltip="Pray to Sahria" ' +
  'praytype="0"></span></td><td>' +
  '<span class="fshTempleOne" data-tooltip="Pray to Osverin" ' +
  'praytype="1"></span></td></tr><tr><td>' +
  '<span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" ' +
  'praytype="2"></span></td><td>' +
  '<span class="fshTempleThree" data-tooltip="Pray to Lindarsil" ' +
  'praytype="3"></span></td></tr></tbody></table>' +
  `<a href="${cmdUrl}temple">` +
  '<p class="notification-content">Bow down to the gods</p>' +
  '</a></span></li>';

function saveTempleSettings(needToPray) {
  setValue('needToPray', needToPray);
  setValue('lastTempleCheck', new Date().setUTCHours(23, 59, 59, 999) + 1); // midnight
}

async function prayToGods(e) {
  const myGod = e.target.getAttribute('praytype');
  if (!myGod) return;
  sendEvent('notification', 'prayToGods');
  hideQTip(e.target);
  await daTemplePray(myGod);
  helperPrayToGods.outerHTML = havePrayedMsg;
  saveTempleSettings(false);
}

function displayDisconnectedFromGodsMessage() {
  insertHtmlBeforeEnd(getElementById('notifications'), godsNotification);
  helperPrayToGods = getElementById('helperPrayToGods');
  once(helperPrayToGods, 'click', prayToGods);
}

export async function checkTemple() {
  if (!calf.enableTempleAlert) return;
  const response =
    calf.cmd === 'temple' ? parseTemplePage(document) : await daTempleView();
  if (!response.s) return;
  const needToPray = response.r.pray_index === -1;
  if (needToPray) displayDisconnectedFromGodsMessage();
  saveTempleSettings(needToPray);
}

function checkLastUpdate(templeAlertLastUpdate) {
  return !templeAlertLastUpdate || now() > templeAlertLastUpdate;
}

function doWeNeedToParse() {
  if (checkLastUpdate(getValue('lastTempleCheck'))) checkTemple();
  else if (getValue('needToPray')) displayDisconnectedFromGodsMessage();
}

export function injectTempleAlert() {
  // Checks to see if the temple is open for business.
  if (!calf.enableTempleAlert || calf.cmd === 'temple' || jQueryNotPresent())
    return;
  doWeNeedToParse();
}
