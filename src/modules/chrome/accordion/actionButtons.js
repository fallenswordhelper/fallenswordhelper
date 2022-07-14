import injectAuctionSearch from '../pageSwitcher/loader/injectAuctionSearch';
import injectFindBuffs from '../pageSwitcher/loader/injectFindBuffs';
import injectFindOther from '../pageSwitcher/loader/injectFindOther';
import injectOnlinePlayers from '../pageSwitcher/loader/injectOnlinePlayers';
import anchorButton from './anchorButton';

export default function actionButtons(linkConfig) {
  if (linkConfig.auctionSearchLink) {
    anchorButton('2', 'AH Quick Search', injectAuctionSearch, 'nav-actions-trade-auctionhouse');
  }
  if (linkConfig.onlinePlayersLink) {
    anchorButton('2', 'Online Players', injectOnlinePlayers, 'nav-actions-interaction-findplayer');
  }
  if (linkConfig.findOtherLink) {
    anchorButton('2', 'Find Other', injectFindOther, 'nav-actions-interaction-findplayer');
  }
  if (linkConfig.findBuffsLink) {
    anchorButton('2', 'Find Buffs', injectFindBuffs, 'nav-actions-interaction-findplayer');
  }
}
