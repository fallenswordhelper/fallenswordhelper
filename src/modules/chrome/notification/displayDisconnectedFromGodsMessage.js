import './displayDisconnectedFromGodsMessage.css';
import { cmdUrl } from '../../support/constants';
import getElementById from '../../common/getElementById';
import hideQTip from '../../common/hideQTip';
import indexAjaxData from '../../ajax/indexAjaxData';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import once from '../../common/once';
import saveTempleSettings from './saveTempleSettings';
import sendEvent from '../../analytics/sendEvent';

let helperPrayToGods = 0;

const havePrayedMsg = '<span class="notification-icon"></span>'
  + '<p class="notification-content">'
  + 'You are currently praying at the temple.</p>';
const godsNotification = '<li class="notification">'
  + '<span id="helperPrayToGods" class="fastPray">'
  + '<table><tbody><tr><td>'
  + '<span class="fshTempleZero" data-tooltip="Pray to Sahria" '
  + 'praytype="0"></span></td><td>'
  + '<span class="fshTempleOne" data-tooltip="Pray to Osverin" '
  + 'praytype="1"></span></td></tr><tr><td>'
  + '<span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" '
  + 'praytype="2"></span></td><td>'
  + '<span class="fshTempleThree" data-tooltip="Pray to Lindarsil" '
  + 'praytype="3"></span></td></tr></tbody></table>'
  + `<a href="${cmdUrl}temple">`
  + '<p class="notification-content">Bow down to the gods</p>'
  + '</a></span></li>';

async function prayToGods(e) {
  const myGod = e.target.getAttribute('praytype');
  if (!myGod) { return; }
  sendEvent('notification', 'prayToGods');
  hideQTip(e.target);
  await indexAjaxData({ cmd: 'temple', subcmd: 'pray', type: myGod });
  helperPrayToGods.outerHTML = havePrayedMsg;
  saveTempleSettings(false);
}

export default function displayDisconnectedFromGodsMessage() {
  insertHtmlBeforeEnd(getElementById('notifications'), godsNotification);
  helperPrayToGods = getElementById('helperPrayToGods');
  once(helperPrayToGods, 'click', prayToGods);
}
