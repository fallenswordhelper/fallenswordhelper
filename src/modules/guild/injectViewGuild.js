import createStyle from '../common/cElement/createStyle';
import currentGuildId from '../common/currentGuildId';
import getElementsByTagName from '../common/getElementsByTagName';
import insertElement from '../common/insertElement';
import lastActivity from '../common/lastActivity';
import {
  getLowerGvGLevel,
  getLowerPvpLevel,
  getUpperGvgLevel,
  getUpperPvpLevel,
} from '../common/levelHighlight';
import querySelectorArray from '../common/querySelectorArray';
import regExpFirstCapture from '../common/regExpFirstCapture';
import { defTable, vlRe } from '../support/constants';
import { getPcc } from '../support/layout';
import getUrlParameter from '../system/getUrlParameter';
import getValue from '../system/getValue';
import compressHistory from './compressHistory';

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

const getLastActivity = (a) => [a, lastActivity(a.dataset.tipped).days];
const recentActivity = ([, lastActDays]) => lastActDays < 7;
const getVLevel = ([a]) => [a, Number(regExpFirstCapture(vlRe, a.dataset.tipped))];
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

function targetStyle(target, value) {
  if (target.length) {
    const style = `${selector(target)} {background-color: #${value};}`;
    insertElement(document.body, createStyle(style));
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
  targetStyle(pvpTargets, '4671C8');
  targetStyle(gvgTargets, 'FF9900');
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
