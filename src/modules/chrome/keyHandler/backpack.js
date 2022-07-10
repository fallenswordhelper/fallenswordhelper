import navigateTo from '../../common/navigateTo';
import { dropItemsUrl } from '../../support/constants';
import expandMenu from './expandMenu';
import keyHandlerEvent from './keyHandlerEvent';

export default function backpack() {
  keyHandlerEvent('backpack');
  expandMenu('2');
  navigateTo(dropItemsUrl);
}
