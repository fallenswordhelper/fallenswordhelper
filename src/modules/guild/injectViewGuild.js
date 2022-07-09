import compressHistory from './compressHistory';
import createStyle from '../common/cElement/createStyle';
import currentGuildId from '../common/currentGuildId';
import getElementsByTagName from '../common/getElementsByTagName';
import { getPcc } from '../support/layout';
import getUrlParameter from '../system/getUrlParameter';
import getValue from '../system/getValue';
import insertElement from '../common/insertElement';
import querySelectorArray from '../common/querySelectorArray';
import { defTable, lastActivityRE, vlRe } from '../support/constants';
import {
  getLowerGvGLevel,
  getLowerPvpLevel,
  getUpperGvgLevel,
  getUpperPvpLevel,
} from '../common/levelHighlight';

let highlightPlayersNearMyLvl = 0;
let highlightGvGPlayersNearMyLvl = 0;

function isPvpTarget(vlevel) {
  return highlightPlayersNearMyLvl
    && vlevel >= getLowerPvpLevel()
    && vlevel <= getUpperPvpLevel();
}

function isGvgTarget(vlevel) {
  return highlightGvGPlayersNearMyLvl
    && vlevel >= getLowerGvGLevel()
    && vlevel <= getUpperGvgLevel();
}

const getLastActivity = (a) => [a, lastActivityRE.exec(a.dataset.tipped)[1]];
const recentActivity = ([, lastActDays]) => lastActDays < 7;
const getVLevel = ([a]) => [a, Number(vlRe.exec(a.dataset.tipped)[1])];
const getFlags = ([a, vlevel]) => [
  a.parentNode.parentNode.rowIndex,
  isPvpTarget(vlevel),
  isGvgTarget(vlevel),
];

function getPlayerLinks() {
  return querySelectorArray('#pCC a[data-tipped*="<td>VL:</td>"]')
    .map(getLastActivity)
    .filter(recentActivity)
    .map(getVLevel)
    .map(getFlags);
}

function shouldHighlight() {
  return Number(getUrlParameter('guild_id')) !== currentGuildId()
    && (highlightPlayersNearMyLvl || highlightGvGPlayersNearMyLvl);
}

const selector = (targets) => targets
  .map(([rowIndex]) => `.fshHighlight tr:nth-child(${rowIndex + 1})`)
  .join(',');

function pvpTargetStyle(pvpTargets) {
  if (pvpTargets.length) {
    const pvpStyle = `${selector(pvpTargets)} {background-color: #4671C8;}`;
    insertElement(document.body, createStyle(pvpStyle));
  }
}

function gvgTargetStyle(gvgTargets) {
  if (gvgTargets.length) {
    const gvgStyle = `${selector(gvgTargets)} {background-color: #FF9900;}`;
    insertElement(document.body, createStyle(gvgStyle));
  }
}

function memberListStyle(pvpTargets, gvgTargets) {
  if (pvpTargets.length + gvgTargets.length) {
    const tables = getElementsByTagName(defTable, getPcc());
    const memberList = tables[tables.length - 1];
    memberList.classList.add('fshHighlight');
  }
}

function actuallyHighlight() {
  const playerLinks = getPlayerLinks();
  const pvpTargets = playerLinks.filter(([, pvpTarget]) => pvpTarget);
  const gvgTargets = playerLinks.filter(([, pvpTarget, gvgTarget]) => !pvpTarget && gvgTarget);
  pvpTargetStyle(pvpTargets);
  gvgTargetStyle(gvgTargets);
  memberListStyle(pvpTargets, gvgTargets);
}

function doHighlights() {
  if (shouldHighlight()) {
    actuallyHighlight();
  }
}

export default function injectViewGuild() {
  highlightPlayersNearMyLvl = getValue('highlightPlayersNearMyLvl');
  highlightGvGPlayersNearMyLvl = getValue('highlightGvGPlayersNearMyLvl');
  doHighlights();
  if (getValue('enableHistoryCompressor')) { compressHistory(); }
}
