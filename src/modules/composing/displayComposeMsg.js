import { composingUrl } from '../support/constants';
import getElementById from '../common/getElementById';
import insertHtmlAfterBegin from '../common/insertHtmlAfterBegin';

const composeMsg = `<li class="notification"><a href="${composingUrl}"><span`
  + ' class="notification-icon"></span><p class="notification-content">'
  + 'Composing to do</p></a></li>';

export default function displayComposeMsg() {
  insertHtmlAfterBegin(getElementById('notifications'), composeMsg);
}
