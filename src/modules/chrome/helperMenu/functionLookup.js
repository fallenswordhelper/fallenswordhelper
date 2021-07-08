import {
  combatLog,
  injectAuctionSearch,
  injectBuffLog,
  injectFindBuffs,
  injectFindOther,
  injectFsBoxContent,
  injectMonsterLog,
  injectOnlinePlayers,
  injectQuickLinkManager,
  injectRecipeManager,
  insertQuickExtract,
  insertQuickWear,
} from '../pageSwitcher/loader';

export default {
  'Buff Log': injectBuffLog,
  'Combat Log': combatLog,
  'Creature Log': injectMonsterLog,
  'Recipe Manager': injectRecipeManager,
  'Quick Links': injectQuickLinkManager,
  'Find Buffs': injectFindBuffs,
  'Find Other': injectFindOther,
  'Online Players': injectOnlinePlayers,
  'AH Quick Search': injectAuctionSearch,
  'Quick Extract': insertQuickExtract,
  'Quick Wear': insertQuickWear,
  'FS Box Log': injectFsBoxContent,
};
