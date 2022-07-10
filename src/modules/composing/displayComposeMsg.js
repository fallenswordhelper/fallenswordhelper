import getElementById from '../common/getElementById';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import { composingUrl } from '../support/constants';

const composeMsg = `<li class="notification"><a href="${composingUrl}"><span`
  + ' class="notification-icon"></span><p class="notification-content">'
  + 'Composing to do</p></a></li>';

export default function displayComposeMsg() {
  insertHtmlBeforeEnd(getElementById('notifications'), composeMsg);
}
