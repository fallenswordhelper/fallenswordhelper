import adjustHeight from './adjustHeight';
import currentGuildId from '../../common/currentGuildId';
import execute from '../../common/execute';
import {getElementById} from '../../common/getElement';
import getValue from '../../system/getValue';
import injectBuffLog from '../../buffLog/injectBuffLog';
import injectMonsterLog from '../../monstorLog';
import injectNotepadShowLogs from '../../combatLog';
import injectOnlinePlayers from
  '../../notepad/onlinePlayers/injectOnlinePlayers';
import injectRecipeManager from '../../recipeMgr/recipeMgr';
import insertElement from '../../common/insertElement';
import insertElementAfter from '../../common/insertElementAfter';
import insertHtmlAfterEnd from '../../common/insertHtmlAfterEnd';
import jQueryDialog from '../jQueryDialog';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import {newGuildLogUrl} from '../../support/constants';
import on from '../../common/on';
import {createAnchor, createLi} from '../../common/cElement';
import {injectAuctionSearch, injectQuickLinkManager} from '../../lists/lists';
import {injectFindBuffs, injectFindOther} from '../../findBuffs/findBuffs';
import {sendEvent, sendException} from '../../support/fshGa';

function updateQuestLink() {
  var lastActiveQuestPage = getValue('lastActiveQuestPage');
  if (lastActiveQuestPage.length > 0) {
    getElementById('nav-character-questbook')
      .setAttribute('href', lastActiveQuestPage);
  }
}

function updateScavLink() {
  var lastScavPage = getValue('lastScavPage');
  if (lastScavPage.length > 0) {
    getElementById('nav-actions-artisanship-scavenging')
      .setAttribute('href', lastScavPage);
  }
}

function insertAdjElement(parent, listItem) {
  insertElementAfter(listItem, parent);
}

function insertAfterParent(target, fn, listItem) {
  var tgt = getElementById(target);
  if (tgt instanceof Node) {
    var parent = tgt.parentNode;
    fn(parent, listItem);
  } else {sendException('#' + target + ' is not a Node', false);}
}

function anchorButton(navLvl, text, fn, target) {
  var li = createLi({className: 'nav-level-' + navLvl});
  var al = createAnchor({
    className: 'nav-link fshPoint',
    textContent: text
  });
  on(al, 'click', function() {
    sendEvent('accordion', text);
    jQueryDialog(fn);
  });
  insertElement(li, al);
  insertAfterParent(target, insertAdjElement, li);
}

function buffLogLink() {
  if (getValue('keepBuffLog')) {
    anchorButton('1', 'Buff Log', injectBuffLog, 'nav-character-log');
  }
}

function combatLogLink() {
  if (getValue('keepLogs')) {
    anchorButton('1', 'Combat Logs', injectNotepadShowLogs,
      'nav-character-notepad');
  }
}

function creatureLogLink() {
  if (getValue('showMonsterLog')) {
    anchorButton('1', 'Creature Logs', injectMonsterLog,
      'nav-character-notepad');
  }
}

function newGuildLogLink() {
  if (currentGuildId() && !getValue('useNewGuildLog')) {
    // if not using the new guild log, show it as a separate menu entry
    insertAfterParent('nav-guild-ledger-guildlog', insertHtmlAfterEnd,
      '<li class="nav-level-2"><a class="nav-link" ' +
      'href="index.php' + newGuildLogUrl + '"' +
      '>New Guild Log</a></li>');
  }
}

function guildInventory() {
  if (currentGuildId()) {
    insertAfterParent('nav-guild-storehouse-inventory', insertHtmlAfterEnd,
      '<li class="nav-level-2"><a class="nav-link" id="nav-' +
      'guild-guildinvmanager" href="index.php?cmd=notepad&blank=1' +
      '&subcmd=guildinvmgr">Guild Inventory</a></li>');
  }
}

function characterButtons() {
  anchorButton('1', 'Recipe Manager', injectRecipeManager, 'nav-character-log');
  insertAfterParent('nav-character-log', insertHtmlAfterEnd,
    '<li class="nav-level-1"><a class="nav-link" id="nav-' +
    'character-medalguide" href="index.php?cmd=profile&subcmd=' +
    'medalguide">Medal Guide</a></li>' +
    '<li class="nav-level-1"><a class="nav-link" id="nav-' +
    'character-invmanager" href="index.php?cmd=notepad&blank=1&' +
    'subcmd=invmanagernew">Inventory Manager</a></li>');
  buffLogLink();
  combatLogLink();
  creatureLogLink();
  anchorButton('1', 'Quick Links', injectQuickLinkManager,
    'nav-character-notepad');
}

function actionButtons() {
  anchorButton('2', 'AH Quick Search', injectAuctionSearch,
    'nav-actions-trade-auctionhouse');
  anchorButton('2', 'Online Players', injectOnlinePlayers,
    'nav-actions-interaction-findplayer');
  anchorButton('2', 'Find Other', injectFindOther,
    'nav-actions-interaction-findplayer');
  anchorButton('2', 'Find Buffs', injectFindBuffs,
    'nav-actions-interaction-findplayer');
}

function topRatedLink() {
  insertAfterParent('nav-toprated-players-level', insertHtmlAfterEnd,
    '<li class="nav-level-2"><a class="nav-link" id="nav-' +
    'toprated-top250" href="index.php?cmd=toprated&subcmd=xp">' +
    'Top 250 Players</a></li>');
}

function doAccordion() {
  [
    updateQuestLink,
    updateScavLink,
    characterButtons,
    guildInventory,
    newGuildLogLink,
    topRatedLink,
    actionButtons,
    adjustHeight,
  ].forEach(execute);
}

export default function injectMenu() {
  if (!getElementById('pCL') || jQueryNotPresent()) {return;}
  doAccordion();
}