import navigateTo from '../../common/navigateTo';
import { logUrl } from '../../support/constants';
import expandMenu from './expandMenu';
import keyHandlerEvent from './keyHandlerEvent';

export default function logPage() {
  keyHandlerEvent('logPage');
  expandMenu('2');
  navigateTo(logUrl);
}
