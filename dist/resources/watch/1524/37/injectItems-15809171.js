import { c as createAnchor } from './createAnchor-02525368.js';
import { c as createLi } from './createLi-da5d4a6f.js';
import { z as getElementById, af as sendException, o as onclick, s as partial, i as insertElement, Y as sendEvent, Z as jQueryDialog, c3 as injectAuctionSearch, c4 as injectOnlinePlayers, c5 as injectFindOther, c6 as injectFindBuffs, F as querySelectorArray, c7 as injectRecipeManager, a5 as notepadBlankUrl, bL as profileUrl, au as defSubcmd, I as getValue, c8 as injectBuffLog, _ as injectNotepadShowLogs, a0 as injectMonsterLog, c9 as injectQuickLinkManager, b$ as newGuildLogUrl, aa as cmdUrl } from './calfSystem-6840a38e.js';
import { i as insertElementAfter } from './insertElementAfter-be9367f8.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-c42a1aa1.js';
import { c as currentGuildId } from './currentGuildId-00d4d0e4.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-20d2a2e1.js';
import './insertElementBefore-656c48d5.js';

function insertAfterParent(target, fn, listItem) {
  const tgt = getElementById(target);
  if (tgt instanceof Node) {
    const parent = tgt.parentNode;
    fn(parent, listItem);
  } else { sendException(`#${target} is not a Node`, false); }
}

function openDialog(text, fn) {
  sendEvent('accordion', text);
  jQueryDialog(fn);
}

function insertAdjElement(parent, listItem) {
  insertElementAfter(listItem, parent);
}

function anchorButton(navLvl, text, fn, target) {
  const li = createLi({ className: `nav-level-${navLvl}` });
  const al = createAnchor({
    className: 'nav-link fshPoint',
    textContent: text,
  });
  onclick(al, partial(openDialog, text, fn));
  insertElement(li, al);
  insertAfterParent(target, insertAdjElement, li);
}

function actionButtons(linkConfig) {
  if (linkConfig.auctionSearchLink) {
    anchorButton('2', 'AH Quick Search', injectAuctionSearch,
      'nav-actions-trade-auctionhouse');
  }
  if (linkConfig.onlinePlayersLink) {
    anchorButton('2', 'Online Players', injectOnlinePlayers,
      'nav-actions-interaction-findplayer');
  }
  if (linkConfig.findOtherLink) {
    anchorButton('2', 'Find Other', injectFindOther,
      'nav-actions-interaction-findplayer');
  }
  if (linkConfig.findBuffsLink) {
    anchorButton('2', 'Find Buffs', injectFindBuffs,
      'nav-actions-interaction-findplayer');
  }
}

function adjustHeight(theNav, myNav) {
  // first the closed saved variables
  // eslint-disable-next-line no-param-reassign
  myNav.heights = querySelectorArray('#nav > li')
    .map((li) => (querySelectorArray('li', li).length * 22) || null);
  if (Number(myNav.state) !== -1) {
    // and now the open one
    // eslint-disable-next-line no-param-reassign
    theNav.children[myNav.state].children[1].style
      .height = `${myNav.heights[myNav.state]}px`;
  }
}

function recipeManagerLink(linkConfig) {
  if (linkConfig.recipeManagerLink) {
    anchorButton('1', 'Recipe Manager', injectRecipeManager, 'nav-character-log');
  }
}

function inventoryManagerLink(linkConfig) {
  if (linkConfig.inventoryManagerLink) {
    insertAfterParent('nav-character-log', insertHtmlAfterEnd,
      '<li class="nav-level-1"><a class="nav-link" '
      + `id="nav-character-invmanager" href="${
        notepadBlankUrl}invmanagernew">Inventory Manager</a></li>`);
  }
}

function medalGuideLink(linkConfig) {
  if (linkConfig.medalGuideLink) {
    insertAfterParent('nav-character-log', insertHtmlAfterEnd,
      '<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide"'
        + ` href="${profileUrl}${defSubcmd}medalguide">Medal Guide</a></li>`);
  }
}

function buffLogLink(linkConfig) {
  if (linkConfig.buffLogLink && getValue('keepBuffLog')) {
    anchorButton('1', 'Buff Log', injectBuffLog, 'nav-character-log');
  }
}

function combatLogLink(linkConfig) {
  if (linkConfig.combatLogLink && getValue('keepLogs')) {
    anchorButton('1', 'Combat Logs', injectNotepadShowLogs,
      'nav-character-notepad');
  }
}

function creatureLogLink(linkConfig) {
  if (linkConfig.creatureLogLink && getValue('showMonsterLog')) {
    anchorButton('1', 'Creature Logs', injectMonsterLog,
      'nav-character-notepad');
  }
}

function quickLinksLink(linkConfig) {
  if (linkConfig.quickLinksLink) {
    anchorButton('1', 'Quick Links', injectQuickLinkManager,
      'nav-character-notepad');
  }
}

function characterButtons(linkConfig) {
  recipeManagerLink(linkConfig);
  inventoryManagerLink(linkConfig);
  medalGuideLink(linkConfig);
  buffLogLink(linkConfig);
  combatLogLink(linkConfig);
  creatureLogLink(linkConfig);
  quickLinksLink(linkConfig);
}

function guildInventory(linkConfig) {
  if (linkConfig.guildInventoryLink && currentGuildId()) {
    insertAfterParent('nav-guild-storehouse-inventory', insertHtmlAfterEnd,
      '<li class="nav-level-2"><a class="nav-link" '
      + `id="nav-guild-guildinvmanager" href="${
        notepadBlankUrl}guildinvmgr">Guild Inventory</a></li>`);
  }
}

function newGuildLogLink(linkConfig) {
  if (linkConfig.newGuildLogLink && currentGuildId() && !getValue('useNewGuildLog')) {
    // if not using the new guild log, show it as a separate menu entry
    insertAfterParent('nav-guild-ledger-guildlog', insertHtmlBeforeBegin,
      `<li class="nav-level-2"><a class="nav-link" href="${
        newGuildLogUrl}">New Guild Log</a></li>`);
  }
}

function topRatedLink(linkConfig) {
  if (linkConfig.topRatedLink) {
    insertAfterParent('nav-toprated-players-level', insertHtmlAfterEnd,
      '<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" '
    + `href="${cmdUrl}toprated${defSubcmd}xp">Top 250 Players</a></li>`);
  }
}

function injectItems(theNav, myNav, linkConfig) {
  characterButtons(linkConfig);
  actionButtons(linkConfig);
  guildInventory(linkConfig);
  newGuildLogLink(linkConfig);
  topRatedLink(linkConfig);
  adjustHeight(theNav, myNav);
}

export default injectItems;
//# sourceMappingURL=injectItems-15809171.js.map
