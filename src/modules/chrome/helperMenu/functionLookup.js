import combatLog from '../pageSwitcher/loader/combatLog';
import injectAuctionSearch from '../pageSwitcher/loader/injectAuctionSearch';
import injectBuffLog from '../pageSwitcher/loader/injectBuffLog';
import injectFindBuffs from '../pageSwitcher/loader/injectFindBuffs';
import injectFindOther from '../pageSwitcher/loader/injectFindOther';
import injectFsBoxContent from '../pageSwitcher/loader/injectFsBoxContent';
import injectOnlinePlayers from '../pageSwitcher/loader/injectOnlinePlayers';
import injectQuickLinkManager from '../pageSwitcher/loader/injectQuickLinkManager';
import monstorLog from '../pageSwitcher/loader/monstorLog';
import quickExtract from '../pageSwitcher/loader/quickExtract';
import quickwear from '../pageSwitcher/loader/quickwear';
import recipeMgr from '../pageSwitcher/loader/recipeMgr';

export default {
  'Buff Log': injectBuffLog,
  'Combat Log': combatLog,
  'Creature Log': monstorLog,
  'Recipe Manager': recipeMgr,
  'Quick Links': injectQuickLinkManager,
  'Find Buffs': injectFindBuffs,
  'Find Other': injectFindOther,
  'Online Players': injectOnlinePlayers,
  'AH Quick Search': injectAuctionSearch,
  'Quick Extract': quickExtract,
  'Quick Wear': quickwear,
  'FS Box Log': injectFsBoxContent,
};
