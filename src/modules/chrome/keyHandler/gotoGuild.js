import navigateTo from '../../common/navigateTo';
import { guildSubcmdUrl } from '../../support/constants';
import expandMenu from './expandMenu';
import keyHandlerEvent from './keyHandlerEvent';

export default function gotoGuild() {
  keyHandlerEvent('gotoGuild');
  expandMenu('4');
  navigateTo(`${guildSubcmdUrl}manage`);
}
