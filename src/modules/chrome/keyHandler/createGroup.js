import navigateTo from '../../common/navigateTo';
import { groupsSubcmdUrl } from '../../support/constants';
import expandMenu from './expandMenu';
import keyHandlerEvent from './keyHandlerEvent';

export default function createGroup() {
  keyHandlerEvent('createGroup');
  expandMenu('4');
  navigateTo(`${groupsSubcmdUrl}create`);
}
