import calf from '../../support/calf';
import runDefault from '../../common/runDefault';
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
} from './loader';

const injectInventoryManagerNew = () => {
  runDefault(import('../../notepad/inventory/inventory'));
};
const injectNewGuildLog = () => {
  runDefault(import('../../guild/newGuildLog/newGuildLog'));
};
const injectSaveSettings = () => { runDefault(import('../../settings/load')); };
const reliclist = () => {
  runDefault(import('../../notepad/reliclist/reliclist'));
};
const whosGotWhat = () => {
  if (!calf.userIsDev) { return; }
  runDefault(import('../../notepad/whosGotWhat/whosGotWhat'));
};

const notepad = {
  showlogs: { '-': combatLog },
  invmanagernew: { '-': injectInventoryManagerNew }, // TODO
  guildinvmgr: { '-': injectInventoryManagerNew }, // TODO
  recipemanager: { '-': injectRecipeManager },
  auctionsearch: { '-': injectAuctionSearch },
  onlineplayers: { '-': injectOnlinePlayers },
  quicklinkmanager: { '-': injectQuickLinkManager },
  monsterlog: { '-': injectMonsterLog },
  quickextract: { '-': insertQuickExtract },
  quickwear: { '-': insertQuickWear },
  fsboxcontent: { '-': injectFsBoxContent },
  bufflogcontent: { '-': injectBuffLog },
  newguildlog: { '-': injectNewGuildLog }, // TODO
  findbuffs: { '-': injectFindBuffs },
  findother: { '-': injectFindOther },
  savesettings: { '-': injectSaveSettings }, // TODO
  reliclist: { '-': reliclist },
  whosgotwhat: { '-': whosGotWhat },
};

export default notepad;
