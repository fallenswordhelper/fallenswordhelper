import runDefault from '../../common/runDefault';

export const injectBioWidgets = () => { runDefault(import('../../profile/bio/bioWidgets')); };
export const injectGuild = () => { runDefault(import('../../guild/guild')); };
export const injectProfile = () => { runDefault(import('../../profile/profile')); };
export const injectProfileDropItems = () => { runDefault(import('../../profile/dropitems/injectProfileDropItems')); };
export const injectQuestBookFull = () => { runDefault(import('../../questbook/injectQuestBookFull')); };
export const inventing = () => { runDefault(import('../../inventing/inventing')); };
export const news = () => { runDefault(import('../../news/news')); };
export const ufsgAllowBack = () => { runDefault(import('../../guide/ufsgAllowBack')); };
export const viewArchive = () => { runDefault(import('../../news/viewArchive')); };

export const injectBuffLog = (i) => { import('../../notepad/buffLog/injectBuffLog').then((m) => m.default(i)); };
export const injectFsBoxContent = (i) => { import('../../notepad/injectFsBoxContent').then((m) => m.default(i)); };
export const injectMonsterLog = (i) => { import('../../notepad/monstorLog/monstorLog').then((m) => m.default(i)); };
export const combatLogs = (i) => { import('../../notepad/combatLog/combatLog').then((m) => m.default(i)); };
export const injectOnlinePlayers = (i) => { import('../../notepad/onlinePlayers/injectOnlinePlayers').then((m) => m.default(i)); };
export const injectRecipeManager = (i) => { import('../../notepad/recipeMgr/recipeMgr').then((m) => m.default(i)); };
export const insertQuickExtract = (i) => { import('../../notepad/quickExtract/quickExtract').then((m) => m.default(i)); };
export const insertQuickWear = (i) => { import('../../notepad/quickWear/quickWear').then((m) => m.default(i)); };

export const injectAuctionSearch = (i) => { import('../../notepad/lists/lists').then((m) => m.injectAuctionSearch(i)); };
export const injectQuickLinkManager = (i) => { import('../../notepad/lists/lists').then((m) => m.injectQuickLinkManager(i)); };
export const injectFindBuffs = (i) => { import('../../notepad/findBuffs/findBuffs').then((m) => m.injectFindBuffs(i)); };
export const injectFindOther = (i) => { import('../../notepad/findBuffs/findBuffs').then((m) => m.injectFindOther(i)); };
