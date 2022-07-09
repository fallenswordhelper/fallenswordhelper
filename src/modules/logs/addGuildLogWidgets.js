import arrayFrom from '../common/arrayFrom';
import contains from '../common/contains';
import dataRows from '../common/dataRows';
import getArrayByTagName from '../common/getArrayByTagName';
import { getPcc } from '../support/layout';
import getPlayerId from '../common/getPlayerId';
import getValue from '../system/getValue';
import playerId from '../common/playerId';
import { playerLinkSelector } from '../support/constants';
import querySelectorArray from '../common/querySelectorArray';

const getPlyrId = (a) => getPlayerId(a.href);

function msgDoesNotIncludePlayer(aRow) {
  const playerLinks = querySelectorArray(playerLinkSelector, aRow);
  const playerIds = playerLinks.map(getPlyrId).map(Number);
  return playerIds.length
    && !playerIds.some((i) => i === playerId());
}

// eslint-disable-next-line no-param-reassign
function stripClassName(el) { el.className = ''; }

function findPlayers(aRow) { // Legacy
  if (msgDoesNotIncludePlayer(aRow)) {
    arrayFrom(aRow.cells).forEach(stripClassName);
    aRow.classList.add('fshGrey');
    aRow.classList.add('fshXSmall');
  }
}

function processGuildWidgetRow(aRow) { // Legacy
  findPlayers(aRow);
}

function getMessageHeader() {
  return getArrayByTagName('td', getPcc()).find(contains('Message'));
}

function guildLogWidgetsEnabled() { // Legacy
  const messageNameCell = getMessageHeader();
  if (!messageNameCell) { return; }
  const logTable = messageNameCell.parentNode.parentNode.parentNode;
  messageNameCell.innerHTML += '&nbsp;&nbsp;<span class="fshWhite">'
    + '(Guild Log messages not involving self are dimmed!)</span>';
  dataRows(logTable, 3, 0).forEach(processGuildWidgetRow);
}

export default function addGuildLogWidgets() {
  if (getValue('hideNonPlayerGuildLogMessages')) {
    guildLogWidgetsEnabled();
  }
}
