import runDefault from '../../common/runDefault';
import buffLog from './loader/buffLog';
import combatLog from './loader/combatLog';
import creatureLog from './loader/creatureLog';
import fsboxlog from './loader/fsboxlog';
import guildLog from './loader/guildLog';
import injectAuctionSearch from './loader/injectAuctionSearch';
import injectFindBuffs from './loader/injectFindBuffs';
import injectFindOther from './loader/injectFindOther';
import injectOnlinePlayers from './loader/injectOnlinePlayers';
import quickExtract from './loader/quickExtract';
import quickLinksManager from './loader/quickLinksManager';
import quickwear from './loader/quickwear';
import recipeMgr from './loader/recipeMgr';
import reliclist from './loader/reliclist';

const inventory = () => {
  runDefault(import('../../notepad/inventory/inventory'));
};
const load = () => {
  runDefault(import('../../settings/load'));
};
const whosGotWhat = () => {
  if (!defineUserIsDev) {
    return;
  } // whosGotWhat
  runDefault(import('../../notepad/whosGotWhat/whosGotWhat'));
};

const notepad = {
  showlogs: { '-': combatLog },
  invmanagernew: { '-': inventory }, // active
  guildinvmgr: { '-': inventory }, // active
  recipemanager: { '-': recipeMgr },
  auctionsearch: { '-': injectAuctionSearch },
  onlineplayers: { '-': injectOnlinePlayers },
  quicklinkmanager: { '-': quickLinksManager },
  monsterlog: { '-': creatureLog },
  quickextract: { '-': quickExtract },
  quickwear: { '-': quickwear },
  fsboxcontent: { '-': fsboxlog },
  bufflogcontent: { '-': buffLog },
  newguildlog: { '-': guildLog }, // active
  findbuffs: { '-': injectFindBuffs },
  findother: { '-': injectFindOther },
  savesettings: { '-': load }, // active
  reliclist: { '-': reliclist },
  whosgotwhat: { '-': whosGotWhat },
};

export default notepad;
