import combatLog from '../pageSwitcher/loader/combatLog';
import injectAuctionSearch from '../pageSwitcher/loader/injectAuctionSearch';
import injectBuffLog from '../pageSwitcher/loader/injectBuffLog';
import injectFindBuffs from '../pageSwitcher/loader/injectFindBuffs';
import injectFindOther from '../pageSwitcher/loader/injectFindOther';
import injectFsBoxContent from '../pageSwitcher/loader/injectFsBoxContent';
import injectOnlinePlayers from '../pageSwitcher/loader/injectOnlinePlayers';
import injectQuickLinkManager from '../pageSwitcher/loader/injectQuickLinkManager';
import mercs from '../pageSwitcher/loader/mercs';
import monstorLog from '../pageSwitcher/loader/monstorLog';
import quickExtract from '../pageSwitcher/loader/quickExtract';
import quickwear from '../pageSwitcher/loader/quickwear';
import recipeMgr from '../pageSwitcher/loader/recipeMgr';
import gsDl from './gsDl';

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
  'Quick Wear': quickwear,
  'FS Box Log': injectFsBoxContent,
  'Quick Extract': quickExtract,
  'GS Export': gsDl,
  'Merc Hunter': mercs,
};
