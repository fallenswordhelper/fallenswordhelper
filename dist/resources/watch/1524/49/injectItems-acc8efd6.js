import { c as createAnchor } from './createAnchor-a7b63867.js';
import { c as createLi } from './createLi-c54bf004.js';
import { z as getElementById, ah as sendException, o as onclick, s as partial, i as insertElement, T as sendEvent, Z as jQueryDialog, c1 as injectAuctionSearch, c2 as injectOnlinePlayers, c3 as injectFindOther, c4 as injectFindBuffs, F as querySelectorArray, c5 as injectRecipeManager, a5 as notepadBlankUrl, bR as profileUrl, aI as defSubcmd, I as getValue, c6 as injectBuffLog, _ as injectNotepadShowLogs, a0 as injectMonsterLog, c7 as injectQuickLinkManager, c0 as newGuildLogUrl, ac as cmdUrl } from './calfSystem-579856fa.js';
import { i as insertElementAfter } from './insertElementAfter-41f6284c.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-a16caebb.js';
import { c as currentGuildId } from './currentGuildId-060704b6.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-70b1463d.js';
import './insertElementBefore-c7161beb.js';

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
//# sourceMappingURL=injectItems-acc8efd6.js.map
