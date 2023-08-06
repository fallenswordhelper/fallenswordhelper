import runDefault from '../../common/runDefault';
import calf from '../../support/calf';
import buffLog from './loader/buffLog';
import combatLog from './loader/combatLog';
import fsboxlog from './loader/fsboxlog';
import injectAuctionSearch from './loader/injectAuctionSearch';
import injectFindBuffs from './loader/injectFindBuffs';
import injectFindOther from './loader/injectFindOther';
import injectOnlinePlayers from './loader/injectOnlinePlayers';
import injectQuickLinkManager from './loader/injectQuickLinkManager';
import monstorLog from './loader/monstorLog';
import quickExtract from './loader/quickExtract';
import quickwear from './loader/quickwear';
import recipeMgr from './loader/recipeMgr';

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
  fsboxcontent: { '-': fsboxlog },
  bufflogcontent: { '-': buffLog },
  newguildlog: { '-': newGuildLog }, // active
  findbuffs: { '-': injectFindBuffs },
  findother: { '-': injectFindOther },
  savesettings: { '-': load }, // active
  reliclist: { '-': reliclist },
  whosgotwhat: { '-': whosGotWhat },
};

export default notepad;
