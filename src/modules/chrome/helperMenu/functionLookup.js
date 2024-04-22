import { notepadBlankUrl } from '../../support/constants';
import jQueryDialog from '../jQueryDialog/jQueryDialog';
import buffLog from '../pageSwitcher/loader/buffLog';
import combatLog from '../pageSwitcher/loader/combatLog';
import creatureLog from '../pageSwitcher/loader/creatureLog';
import fsboxlog from '../pageSwitcher/loader/fsboxlog';
import guildLog from '../pageSwitcher/loader/guildLog';
import guildTracker from '../pageSwitcher/loader/guildTracker';
import injectAuctionSearch from '../pageSwitcher/loader/injectAuctionSearch';
import injectFindBuffs from '../pageSwitcher/loader/injectFindBuffs';
import injectFindOther from '../pageSwitcher/loader/injectFindOther';
import injectOnlinePlayers from '../pageSwitcher/loader/injectOnlinePlayers';
import mercs from '../pageSwitcher/loader/mercs';
import potReport from '../pageSwitcher/loader/potReport';
import questbook from '../pageSwitcher/loader/questbook';
import quickExtract from '../pageSwitcher/loader/quickExtract';
import quickLinksManager from '../pageSwitcher/loader/quickLinksManager';
import quickwear from '../pageSwitcher/loader/quickwear';
import quickwear2 from '../pageSwitcher/loader/quickwear2';
import recipeMgr from '../pageSwitcher/loader/recipeMgr';
import reliclist from '../pageSwitcher/loader/reliclist';
import setmgr from '../pageSwitcher/loader/setmgr';
import superelite from '../pageSwitcher/loader/superelite';
import gsDl from './gsDl';

function convertToModal(fn) {
  return () => jQueryDialog(fn);
}

export default [
  {
    section: 'Character',
    menu: [
      {
        label: 'Buff Log', fn: buffLog,
      },
      {
        label: 'Combat Log', fn: combatLog,
      },
      {
        label: 'Creature Log', fn: creatureLog,
      },
      {
        label: 'Recipe Manager', fn: recipeMgr,
      },
      {
        label: 'Quick Links', fn: quickLinksManager,
      },
      {
        label: 'Inventory Manager', href: `${notepadBlankUrl}invmanagernew`,
      },
    ],
  },
  {
    section: 'Actions',
    menu: [
      {
        label: 'Find Buffs', fn: convertToModal(injectFindBuffs),
      },
      {
        label: 'Find Other', fn: convertToModal(injectFindOther),
      },
      {
        label: 'Online Players', fn: convertToModal(injectOnlinePlayers),
      },
      {
        label: 'AH Quick Search', fn: convertToModal(injectAuctionSearch),
      },
    ],
  },
  {
    section: 'Guild',
    menu: [
      {
        label: 'Guild Inventory',
        href: `${notepadBlankUrl}guildinvmgr`,
      },
      {
        label: 'New Guild Log', fn: guildLog,
      },
      {
        label: 'Merc Hunter', fn: mercs,
      },
      {
        label: 'Pot Report', fn: potReport,
      },
      {
        label: 'Guild Tracker', fn: guildTracker,
      },
    ],
  },
  {
    section: 'Extra',
    menu: [
      {
        label: 'Quick Extract', fn: quickExtract,
      },
      {
        label: 'Quick Wear', fn: convertToModal(quickwear),
      },
      {
        label: 'FS Box Log', fn: fsboxlog,
      },
      {
        label: 'SE Tracker', fn: superelite,
      },
    ],
  },
  {
    section: 'Beta Features',
    menu: [
      {
        label: 'Relic List', fn: reliclist, beta: true,
      },
      {
        label: 'GS Export', fn: gsDl, beta: true,
      },
    ],
  },
  {
    section: 'Dev Links',
    menu: [
      {
        label: 'Combat Set Manager', fn: setmgr, beta: true,
      },
      {
        label: 'Quest Book', fn: questbook,
      },
      {
        label: 'New Quick Wear', fn: quickwear2,
      },
    ],
  },
  {
    section: 'FSH developer quick links',
    menu: [
      {
        playerId: 1963510, playerName: 'PointyHair',
      },
      {
        playerId: 1674838, playerName: 'Lusterless',
      },
    ],
  },
];
