import buffLog from '../pageSwitcher/loader/buffLog';
import combatLog from '../pageSwitcher/loader/combatLog';
import creatureLog from '../pageSwitcher/loader/creatureLog';
import fsboxlog from '../pageSwitcher/loader/fsboxlog';
import guildTracker from '../pageSwitcher/loader/guildTracker';
import injectAuctionSearch from '../pageSwitcher/loader/injectAuctionSearch';
import injectFindBuffs from '../pageSwitcher/loader/injectFindBuffs';
import injectFindOther from '../pageSwitcher/loader/injectFindOther';
import injectOnlinePlayers from '../pageSwitcher/loader/injectOnlinePlayers';
import mercs from '../pageSwitcher/loader/mercs';
import quickExtract from '../pageSwitcher/loader/quickExtract';
import quickLinksManager from '../pageSwitcher/loader/quickLinksManager';
import quickwear from '../pageSwitcher/loader/quickwear';
import recipeMgr from '../pageSwitcher/loader/recipeMgr';
import reliclist from '../pageSwitcher/loader/reliclist';
import setmgr from '../pageSwitcher/loader/setmgr';
import superelite from '../pageSwitcher/loader/superelite';
import gsDl from './gsDl';

export default {
  'Buff Log': buffLog,
  'Combat Log': combatLog,
  'Creature Log': creatureLog,
  'Recipe Manager': recipeMgr,
  'Quick Links': quickLinksManager,
  'Find Buffs': injectFindBuffs,
  'Find Other': injectFindOther,
  'Online Players': injectOnlinePlayers,
  'AH Quick Search': injectAuctionSearch,
  'Quick Wear': quickwear,
  'FS Box Log': fsboxlog,
  'Quick Extract': quickExtract,
  'GS Export': gsDl,
  'Merc Hunter': mercs,
  'SE Tracker': superelite,
  'Guild Tracker': guildTracker,
  'Relic List': reliclist,
  'Combat Set Manager': setmgr,
};
