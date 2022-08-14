import arrayFrom from '../common/arrayFrom';
import closestTable from '../common/closestTable';
import contains from '../common/contains';
import dataRows from '../common/dataRows';
import getArrayByTagName from '../common/getArrayByTagName';
import getPlayerId from '../common/getPlayerId';
import getText from '../common/getText';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import playerId from '../common/playerId';
import querySelectorArray from '../common/querySelectorArray';
import { guildSubcmdUrl, playerLinkSelector } from '../support/constants';
import { pcc } from '../support/layout';
import getValue from '../system/getValue';

const getMessageHeader = () => getArrayByTagName('td', pcc()).find(contains('Message'));
const getPlyrId = (a) => getPlayerId(a.href);
function stripClassName(ctx) { ctx.className = ''; }

function msgDoesNotIncludePlayer(aRow) {
  const playerLinks = querySelectorArray(playerLinkSelector, aRow);
  const playerIds = playerLinks.map(getPlyrId).map(Number);
  return playerIds.length
    && !playerIds.some((i) => i === playerId());
}

function joinReq(cell) {
  const joinId = getPlyrId(cell.children[0]);
  insertHtmlBeforeEnd(cell, ` [ <a href="${guildSubcmdUrl}recruit&subcmd2=acceptjoin&id=${
    joinId}">Accept</a> | <a href="${guildSubcmdUrl}recruit&subcmd2=denyjoin&id=${
    joinId}">Deny</a> ]`);
}

function findPlayers(aRow) {
  if (msgDoesNotIncludePlayer(aRow)) {
    arrayFrom(aRow.cells).forEach(stripClassName);
    aRow.classList.add('fshGrey');
    aRow.classList.add('fshXSmall');
  }
  if (getText(aRow.cells[2]).includes('requested')) {
    joinReq(aRow.cells[2]);
  }
}

function guildLogWidgetsEnabled() {
  const messageNameCell = getMessageHeader();
  if (!messageNameCell) { return; }
  const logTable = closestTable(messageNameCell);
  messageNameCell.innerHTML += '&nbsp;&nbsp;<span class="fshWhite">'
    + '(Guild Log messages not involving self are dimmed!)</span>';
  dataRows(logTable, 3, 0).forEach(findPlayers);
}

export default function addGuildLogWidgets() {
  if (getValue('hideNonPlayerGuildLogMessages')) guildLogWidgetsEnabled();
}
