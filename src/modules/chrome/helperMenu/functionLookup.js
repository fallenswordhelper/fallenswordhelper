import {
  injectAuctionSearch,
  injectBuffLog,
  injectFindBuffs,
  injectFindOther,
  injectFsBoxContent,
  injectMonsterLog,
  injectNotepadShowLogs,
  injectOnlinePlayers,
  injectQuickLinkManager,
  injectRecipeManager,
  insertQuickExtract,
  insertQuickWear,
} from '../pageSwitcher/loader';

export default {
  'Buff Log': injectBuffLog,
  'Combat Log': injectNotepadShowLogs,
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
