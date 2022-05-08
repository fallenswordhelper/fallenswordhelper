import { composingUrl } from '../support/constants';
import getElementById from '../common/getElementById';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';

const composeMsg = `<li class="notification"><a href="${composingUrl}"><span`
  + ' class="notification-icon"></span><p class="notification-content">'
  + 'Composing to do</p></a></li>';

export default function displayComposeMsg() {
  insertHtmlBeforeEnd(getElementById('notifications'), composeMsg);
}
