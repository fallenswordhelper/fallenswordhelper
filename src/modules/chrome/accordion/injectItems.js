import currentGuildId from '../../common/currentGuildId';
import querySelectorArray from '../../common/querySelectorArray';
import {
  cmdUrl,
  defSubcmd,
  newGuildLogUrl,
  notepadBlankUrl,
  profileUrl,
} from '../../support/constants';
import getValue from '../../system/getValue';
import buffLog from '../pageSwitcher/loader/buffLog';
import combatLog from '../pageSwitcher/loader/combatLog';
import creatureLog from '../pageSwitcher/loader/creatureLog';
import injectAuctionSearch from '../pageSwitcher/loader/injectAuctionSearch';
import injectFindBuffs from '../pageSwitcher/loader/injectFindBuffs';
import injectFindOther from '../pageSwitcher/loader/injectFindOther';
import injectOnlinePlayers from '../pageSwitcher/loader/injectOnlinePlayers';
import quickLinksManager from '../pageSwitcher/loader/quickLinksManager';
import recipeMgr from '../pageSwitcher/loader/recipeMgr';
import anchorButton from './anchorButton';

const buttons = [
  [(linkConfig) => linkConfig.recipeManagerLink,
    '1', 'Recipe Manager', recipeMgr, 'nav-character-log'],
  [(linkConfig) => linkConfig.inventoryManagerLink,
    '1', 'Inventory Manager', `${notepadBlankUrl}invmanagernew`, 'nav-character-log'],
  [(linkConfig) => linkConfig.medalGuideLink,
    '1', 'Medal Guide', `${profileUrl}${defSubcmd}medalguide`, 'nav-character-log'],
  [(linkConfig) => linkConfig.buffLogLink && getValue('keepBuffLog'),
    '1', 'Buff Log', buffLog, 'nav-character-log'],
  [(linkConfig) => linkConfig.combatLogLink && getValue('keepLogs'),
    '1', 'Combat Logs', combatLog, 'nav-character-notepad'],
  [(linkConfig) => linkConfig.creatureLogLink && getValue('showMonsterLog'),
    '1', 'Creature Logs', creatureLog, 'nav-character-notepad'],
  [(linkConfig) => linkConfig.quickLinksLink,
    '1', 'Quick Links', quickLinksManager, 'nav-character-notepad'],
  [(linkConfig) => linkConfig.auctionSearchLink,
    '2', 'AH Quick Search', injectAuctionSearch, 'nav-actions-trade-auctionhouse'],
  [(linkConfig) => linkConfig.onlinePlayersLink,
    '2', 'Online Players', injectOnlinePlayers, 'nav-actions-interaction-findplayer'],
  [(linkConfig) => linkConfig.findOtherLink,
    '2', 'Find Other', injectFindOther, 'nav-actions-interaction-findplayer'],
  [(linkConfig) => linkConfig.findBuffsLink,
    '2', 'Find Buffs', injectFindBuffs, 'nav-actions-interaction-findplayer'],
  [(linkConfig) => linkConfig.guildInventoryLink && currentGuildId(),
    '2', 'Guild Inventory', `${notepadBlankUrl}guildinvmgr`, 'nav-guild-storehouse-inventory'],
  [(linkConfig) => linkConfig.newGuildLogLink && currentGuildId() && !getValue('useNewGuildLog'),
    '2', 'New Guild Log', newGuildLogUrl, 'nav-guild-ledger-advisor'],
  [(linkConfig) => linkConfig.topRatedLink,
    '2', 'Top 250 Players', `${cmdUrl}toprated${defSubcmd}xp`, 'nav-toprated-players-level'],
];

function extraButtons(linkConfig) {
  buttons.forEach(([test, navLvl, text, fn, target]) => {
    if (test(linkConfig)) anchorButton(navLvl, text, fn, target);
  });
}

// zero maps to null
const subItems = (li) => (querySelectorArray('li', li).length * 22) || null; // skipcq: JS-W1043

function adjustHeight(theNav, myNav) {
  // first the closed saved variables
  // eslint-disable-next-line no-param-reassign
  myNav.heights = querySelectorArray('#nav > li').map(subItems); // skipcq: JS-0083
  const index = Number(myNav.state);
  if (index && index > -1 && index < theNav.children.length) {
    // and now the open one
    // eslint-disable-next-line no-param-reassign
    theNav.children[myNav.state].children[1].style.height = `${myNav.heights[myNav.state]}px`; // skipcq: JS-0083
  }
}

export default function injectItems(theNav, myNav, linkConfig) {
  extraButtons(linkConfig);
  adjustHeight(theNav, myNav);
}
