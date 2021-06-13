import { cmdUrl } from '../../support/constants';
import getElementById from '../../common/getElement';
import hideQTip from '../../common/hideQTip';
import indexAjaxData from '../../ajax/indexAjaxData';
import insertHtmlAfterBegin from '../../common/insertHtmlAfterBegin';
import once from '../../common/once';
import saveTempleSettings from './saveTempleSettings';

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

function havePrayed() {
  getElementById('helperPrayToGods').outerHTML = havePrayedMsg;
  saveTempleSettings(false);
}

function prayToGods(e) { // jQuery
  const myGod = e.target.getAttribute('praytype');
  if (!myGod) { return; }
  indexAjaxData({ cmd: 'temple', subcmd: 'pray', type: myGod })
    .then(havePrayed);
  hideQTip(e.target);
}

export default function displayDisconnectedFromGodsMessage() {
  insertHtmlAfterBegin(getElementById('notifications'), godsNotification);
  once(getElementById('helperPrayToGods'), 'click', prayToGods);
}
