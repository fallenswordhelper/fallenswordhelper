import calf from '../../support/calf';
import combatLog from './loader/combatLog';
import injectAuctionSearch from './loader/injectAuctionSearch';
import injectBuffLog from './loader/injectBuffLog';
import injectFindBuffs from './loader/injectFindBuffs';
import injectFindOther from './loader/injectFindOther';
import injectFsBoxContent from './loader/injectFsBoxContent';
import injectOnlinePlayers from './loader/injectOnlinePlayers';
import injectQuickLinkManager from './loader/injectQuickLinkManager';
import monstorLog from './loader/monstorLog';
import quickExtract from './loader/quickExtract';
import quickwear from './loader/quickwear';
import recipeMgr from './loader/recipeMgr';
import runDefault from '../../common/runDefault';

const inventory = () => { runDefault(import('../../notepad/inventory/inventory')); };
const newGuildLog = () => { runDefault(import('../../notepad/newGuildLog/newGuildLog')); };
const load = () => { runDefault(import('../../settings/load')); };
const reliclist = () => { runDefault(import('../../notepad/reliclist/reliclist')); };
const whosGotWhat = () => {
  if (!calf.userIsDev) { return; } // whosGotWhat
  runDefault(import('../../notepad/whosGotWhat/whosGotWhat'));
};

const notepad = {
  showlogs: { '-': combatLog },
  invmanagernew: { '-': inventory }, // active
  guildinvmgr: { '-': inventory }, // active
  recipemanager: { '-': recipeMgr },
  auctionsearch: { '-': injectAuctionSearch },
  onlineplayers: { '-': injectOnlinePlayers },
  quicklinkmanager: { '-': injectQuickLinkManager },
  monsterlog: { '-': monstorLog },
  quickextract: { '-': quickExtract },
  quickwear: { '-': quickwear },
  fsboxcontent: { '-': injectFsBoxContent },
  bufflogcontent: { '-': injectBuffLog },
  newguildlog: { '-': newGuildLog }, // active
  findbuffs: { '-': injectFindBuffs },
  findother: { '-': injectFindOther },
  savesettings: { '-': load }, // active
  reliclist: { '-': reliclist },
  whosgotwhat: { '-': whosGotWhat },
};

export default notepad;
