import calf from '../../support/calf';
import runDefault from '../../common/runDefault';
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
} from './loader';

const inventory = () => { runDefault(import('../../notepad/inventory/inventory')); };
const newGuildLog = () => { runDefault(import('../../guild/newGuildLog/newGuildLog')); };
const load = () => { runDefault(import('../../settings/load')); };
const reliclist = () => { runDefault(import('../../notepad/reliclist/reliclist')); };
const whosGotWhat = () => {
  if (!calf.userIsDev) { return; }
  runDefault(import('../../notepad/whosGotWhat/whosGotWhat'));
};

const notepad = {
  showlogs: { '-': combatLog },
  invmanagernew: { '-': inventory }, // TODO
  guildinvmgr: { '-': inventory }, // TODO
  recipemanager: { '-': recipeMgr },
  auctionsearch: { '-': injectAuctionSearch },
  onlineplayers: { '-': injectOnlinePlayers },
  quicklinkmanager: { '-': injectQuickLinkManager },
  monsterlog: { '-': monstorLog },
  quickextract: { '-': quickExtract },
  quickwear: { '-': quickWear },
  fsboxcontent: { '-': injectFsBoxContent },
  bufflogcontent: { '-': injectBuffLog },
  newguildlog: { '-': newGuildLog }, // TODO
  findbuffs: { '-': injectFindBuffs },
  findother: { '-': injectFindOther },
  savesettings: { '-': load }, // TODO
  reliclist: { '-': reliclist },
  whosgotwhat: { '-': whosGotWhat },
};

export default notepad;
