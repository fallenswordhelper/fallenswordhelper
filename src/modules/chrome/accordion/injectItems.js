import currentGuildId from '../../common/currentGuildId';
import insertHtmlAfterEnd from '../../common/insertHtmlAfterEnd';
import insertHtmlBeforeBegin from '../../common/insertHtmlBeforeBegin';
import {
  cmdUrl,
  defSubcmd,
  newGuildLogUrl,
  notepadBlankUrl,
} from '../../support/constants';
import getValue from '../../system/getValue';
import actionButtons from './actionButtons';
import adjustHeight from './adjustHeight';
import characterButtons from './characterButtons';
import insertAfterParent from './insertAfterParent';

function guildInventory(linkConfig) {
  if (linkConfig.guildInventoryLink && currentGuildId()) {
    insertAfterParent(
      'nav-guild-storehouse-inventory',
      insertHtmlAfterEnd,
      `<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${
        notepadBlankUrl}guildinvmgr">Guild Inventory</a></li>`,
    );
  }
}

function newGuildLogLink(linkConfig) {
  if (linkConfig.newGuildLogLink && currentGuildId() && !getValue('useNewGuildLog')) {
    // if not using the new guild log, show it as a separate menu entry
    insertAfterParent(
      'nav-guild-ledger-guildlog',
      insertHtmlBeforeBegin,
      `<li class="nav-level-2"><a class="nav-link" href="${
        newGuildLogUrl}">New Guild Log</a></li>`,
    );
  }
}

function topRatedLink(linkConfig) {
  if (linkConfig.topRatedLink) {
    insertAfterParent(
      'nav-toprated-players-level',
      insertHtmlAfterEnd,
      `<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${
        cmdUrl}toprated${defSubcmd}xp">Top 250 Players</a></li>`,
    );
  }
}

export default function injectItems(theNav, myNav, linkConfig) {
  characterButtons(linkConfig);
  actionButtons(linkConfig);
  guildInventory(linkConfig);
  newGuildLogLink(linkConfig);
  topRatedLink(linkConfig);
  adjustHeight(theNav, myNav);
}
