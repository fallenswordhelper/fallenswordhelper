import {
  combatLog,
  injectAuctionSearch,
  injectBuffLog,
  injectFindBuffs,
  injectFindOther,
  injectFsBoxContent,
  injectOnlinePlayers,
  injectQuickLinkManager,
  monstorLog,
  quickExtract,
  quickWear,
  recipeMgr,
} from '../pageSwitcher/loader';

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
  'Quick Wear': quickWear,
  'FS Box Log': injectFsBoxContent,
};
