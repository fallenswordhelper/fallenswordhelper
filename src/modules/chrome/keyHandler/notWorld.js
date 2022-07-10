import getElementById from '../../common/getElementById';
import navigateTo from '../../common/navigateTo';
import keyHandlerEvent from './keyHandlerEvent';

export default function notWorld(type, href) {
  if (!getElementById('worldPage')) {
    keyHandlerEvent(type);
    navigateTo(href);
  }
}
