import sendEvent from '../../analytics/sendEvent';
import isFunction from '../../common/isFunction';
import jQueryPresent from '../../common/jQueryPresent';
import { newGuildLogUrl, notepadBlankUrl } from '../../support/constants';
import jQueryDialog from '../jQueryDialog/jQueryDialog';
import buffLog from '../pageSwitcher/loader/buffLog';
import combatLog from '../pageSwitcher/loader/combatLog';
import creatureLog from '../pageSwitcher/loader/creatureLog';
import fsboxlog from '../pageSwitcher/loader/fsboxlog';
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
import recipeMgr from '../pageSwitcher/loader/recipeMgr';
import reliclist from '../pageSwitcher/loader/reliclist';
import setmgr from '../pageSwitcher/loader/setmgr';
import superelite from '../pageSwitcher/loader/superelite';
import gsDl from './gsDl';

function callModalFunction(name, fn) {
  if (isFunction(fn)) {
    sendEvent('helperMenu', name);
    fn();
  }
}

function callHelperFunction(name, fn) {
  if (jQueryPresent()) {
    callModalFunction(name, () => jQueryDialog(fn));
  }
}

export default [
  {
    section: 'Character',
    menu: [
      {
        label: 'Buff Log', type: 'button', f: buffLog, caller: callModalFunction,
      },
      {
        label: 'Combat Log', type: 'button', f: combatLog, caller: callModalFunction,
      },
      {
        label: 'Creature Log', type: 'button', f: creatureLog, caller: callModalFunction,
      },
      {
        label: 'Recipe Manager', type: 'button', f: recipeMgr, caller: callModalFunction,
      },
      {
        label: 'Quick Links', type: 'button', f: quickLinksManager, caller: callModalFunction,
      },
      {
        label: 'Inventory Manager', type: 'link', href: `${notepadBlankUrl}invmanagernew`,
      },
    ],
  },
  {
    section: 'Actions',
    menu: [
      {
        label: 'Find Buffs', type: 'button', f: injectFindOther, caller: callHelperFunction,
      },
      {
        label: 'Find Other', type: 'button', f: injectFindBuffs, caller: callHelperFunction,
      },
      {
        label: 'Online Players', type: 'button', f: injectOnlinePlayers, caller: callHelperFunction,
      },
      {
        label: 'AH Quick Search', type: 'button', f: injectAuctionSearch, caller: callHelperFunction,
      },
    ],
  },
  {
    section: 'Guild',
    menu: [
      { label: 'Guild Inventory', type: 'link', href: `${notepadBlankUrl}guildinvmgr` },
      { label: 'New Guild Log', type: 'link', href: `${newGuildLogUrl}` },
      {
        label: 'Buff Log', type: 'button', f: buffLog, caller: callModalFunction,
      },
      {
        label: 'Merc Hunter', type: 'button', f: mercs, caller: callModalFunction,
      },
      {
        label: 'Pot Report', type: 'button', f: potReport, caller: callModalFunction,
      },
      {
        label: 'Guild Tracker', type: 'button', f: guildTracker, caller: callModalFunction,
      },
    ],
  },
  {
    section: 'Extra',
    menu: [
      {
        label: 'Quick Extract', type: 'button', f: quickExtract, caller: callModalFunction,
      },
      {
        label: 'Quick Wear', type: 'button', f: quickwear, caller: callHelperFunction,
      },
      {
        label: 'FS Box Log', type: 'button', f: fsboxlog, caller: callModalFunction,
      },
      {
        label: 'SE Tracker', type: 'button', f: superelite, caller: callModalFunction,
      },
    ],
  },
  {
    section: 'Beta Features',
    menu: [
      {
        label: 'Relic List', type: 'button', f: reliclist, caller: callModalFunction, beta: true,
      },
      {
        label: 'GS Export', type: 'button', f: gsDl, caller: callHelperFunction, beta: true,
      },
    ],
  },
  {
    section: 'Dev Links',
    menu: [
      {
        label: 'Combat Set Manager', type: 'button', f: setmgr, caller: callModalFunction, beta: true,
      },
      {
        label: 'Quest Book', type: 'button', f: questbook, caller: callModalFunction,
      },
    ],
  },
];
