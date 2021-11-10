import anchorButton from './anchorButton';
import combatLog from '../pageSwitcher/loader/combatLog';
import getValue from '../../system/getValue';
import injectBuffLog from '../pageSwitcher/loader/injectBuffLog';
import injectQuickLinkManager from '../pageSwitcher/loader/injectQuickLinkManager';
import insertAfterParent from './insertAfterParent';
import insertHtmlAfterEnd from '../../common/insertHtmlAfterEnd';
import monstorLog from '../pageSwitcher/loader/monstorLog';
import recipeMgr from '../pageSwitcher/loader/recipeMgr';
import {
  defSubcmd,
  notepadBlankUrl,
  profileUrl,
} from '../../support/constants';

function recipeManagerLink(linkConfig) {
  if (linkConfig.recipeManagerLink) {
    anchorButton('1', 'Recipe Manager', recipeMgr, 'nav-character-log');
  }
}

function inventoryManagerLink(linkConfig) {
  if (linkConfig.inventoryManagerLink) {
    insertAfterParent(
      'nav-character-log',
      insertHtmlAfterEnd,
      `<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${
        notepadBlankUrl}invmanagernew">Inventory Manager</a></li>`,
    );
  }
}

function medalGuideLink(linkConfig) {
  if (linkConfig.medalGuideLink) {
    insertAfterParent(
      'nav-character-log',
      insertHtmlAfterEnd,
      `<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${
        profileUrl}${defSubcmd}medalguide">Medal Guide</a></li>`,
    );
  }
}

function buffLogLink(linkConfig) {
  if (linkConfig.buffLogLink && getValue('keepBuffLog')) {
    anchorButton('1', 'Buff Log', injectBuffLog, 'nav-character-log');
  }
}

function combatLogLink(linkConfig) {
  if (linkConfig.combatLogLink && getValue('keepLogs')) {
    anchorButton('1', 'Combat Logs', combatLog, 'nav-character-notepad');
  }
}

function creatureLogLink(linkConfig) {
  if (linkConfig.creatureLogLink && getValue('showMonsterLog')) {
    anchorButton('1', 'Creature Logs', monstorLog, 'nav-character-notepad');
  }
}

function quickLinksLink(linkConfig) {
  if (linkConfig.quickLinksLink) {
    anchorButton('1', 'Quick Links', injectQuickLinkManager, 'nav-character-notepad');
  }
}

export default function characterButtons(linkConfig) {
  recipeManagerLink(linkConfig);
  inventoryManagerLink(linkConfig);
  medalGuideLink(linkConfig);
  buffLogLink(linkConfig);
  combatLogLink(linkConfig);
  creatureLogLink(linkConfig);
  quickLinksLink(linkConfig);
}
