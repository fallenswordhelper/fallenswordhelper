import add from '../support/task';
import colouredDots from '../common/colouredDots';
import currentGuildId from '../common/currentGuildId';
import getUrlParameter from '../system/getUrlParameter';
import getValue from '../system/getValue';
import {lastActivityRE} from '../support/constants';
import {
  calculateBoundaries,
  gvgLowerLevel,
  gvgUpperLevel,
  pvpLowerLevel,
  pvpUpperLevel
} from '../common/levelHighlight';
import {getXpLock, guildXPLock, removeGuildAvyImgBorder} from './guildUtils';

var highlightPlayersNearMyLvl;
var highlightGvGPlayersNearMyLvl;

function isPvpTarget(vlevel) {
  return highlightPlayersNearMyLvl &&
    vlevel >= pvpLowerLevel &&
    vlevel <= pvpUpperLevel;
}

function isGvgTarget(vlevel) {
  return highlightGvGPlayersNearMyLvl &&
    vlevel >= gvgLowerLevel &&
    vlevel <= gvgUpperLevel;
}

function isActive(el, tipped) {
  var vlevel = Number(/VL:.+?(\d+)/.exec(tipped)[1]);
  var aRow = el.parentNode.parentNode;
  if (isPvpTarget(vlevel)) {
    aRow.classList.add('lvlHighlight');
  } else if (isGvgTarget(vlevel)) {
    aRow.classList.add('lvlGvGHighlight');
  }
}

function highlightMembers(el) {
  var tipped = el.dataset.tipped;
  var lastActDays = lastActivityRE.exec(tipped)[1];
  if (lastActDays < 7) {isActive(el, tipped);}
}

function dontHighlight() {
  return Number(getUrlParameter('guild_id')) === currentGuildId() ||
    !highlightPlayersNearMyLvl && !highlightGvGPlayersNearMyLvl;
}

export default function injectViewGuild() {
  add(3, colouredDots);
  removeGuildAvyImgBorder();
  guildXPLock(getXpLock());
  highlightPlayersNearMyLvl = getValue('highlightPlayersNearMyLvl');
  highlightGvGPlayersNearMyLvl = getValue('highlightGvGPlayersNearMyLvl');
  if (dontHighlight()) {return;}
  calculateBoundaries();
  var memList = document.querySelectorAll(
    '#pCC a[data-tipped*="<td>VL:</td>"]');
  Array.prototype.forEach.call(memList, highlightMembers);
}