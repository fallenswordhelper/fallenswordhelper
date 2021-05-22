import { I as getValue, aI as playerId, ag as arrayFrom, B as setInnerHtml, C as getText, m as getArrayByTagName, p as pCC, aG as contains } from './calfSystem-23094c64.js';
import { d as dataRows } from './dataRows-20212e4a.js';
import { p as playerName } from './playerName-d957b0e4.js';
import { s as searchPlayerHref } from './searchPlayerHref-ad401f41.js';

function getPlayer(playerAry) { // Legacy
  if (playerAry) { return Number(playerAry[1]); }
  return 0;
}

function msgDoesNotIncludePlayer(aRow) {
  const messageHTML = aRow.cells[2].innerHTML;
  const doublerPlayerMessageRE = /member\s<a\shref="index\.php\?cmd=profile&amp;player_id=(\d+)/;
  const secondPlayer = doublerPlayerMessageRE.exec(messageHTML);
  const singlePlayerMessageRE = /<a\shref="index\.php\?cmd=profile&amp;player_id=(\d+)/;
  const firstPlayer = singlePlayerMessageRE.exec(messageHTML);
  const firstPlayerID = getPlayer(firstPlayer);
  const secondPlayerID = getPlayer(secondPlayer);
  return firstPlayer
    && firstPlayerID !== playerId()
    && secondPlayerID !== playerId();
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

function dimIfNotMe(aRow, hasInvited, targetPlayerName) {
  if (!hasInvited && targetPlayerName !== playerName()) {
    $(aRow).find('td').removeClass('row').css('font-size', 'xx-small');
    // eslint-disable-next-line no-param-reassign
    aRow.style.color = 'gray';
  }
}

function likeInvite(aRow, hasInvited) {
  const message = aRow.cells[2].innerHTML;
  const parts = message.split('\'');
  const targetPlayerName = parts[1];
  parts[1] = searchPlayerHref(targetPlayerName);
  setInnerHtml(parts.join('\''), aRow.cells[2]);
  dimIfNotMe(aRow, hasInvited, targetPlayerName);
}

function guildInvite(aRow) { // Legacy
  const msg = getText(aRow.cells[2]);
  const hasInvited = msg.includes('has invited the player');
  if (msg.charAt(0) === '\'' || hasInvited) {
    likeInvite(aRow, hasInvited);
  }
}

function processGuildWidgetRow(aRow) { // Legacy
  findPlayers(aRow);
  guildInvite(aRow);
}

function getMessageHeader() {
  return getArrayByTagName('td', pCC).find(contains('Message'));
}

function guildLogWidgetsEnabled() { // Legacy
  const messageNameCell = getMessageHeader();
  if (!messageNameCell) { return; }
  const logTable = messageNameCell.parentNode.parentNode.parentNode;
  messageNameCell.innerHTML += '&nbsp;&nbsp;<span class="fshWhite">'
    + '(Guild Log messages not involving self are dimmed!)</span>';
  dataRows(logTable.rows, 3, 0).forEach(processGuildWidgetRow);
}

function addGuildLogWidgets() {
  if (getValue('hideNonPlayerGuildLogMessages')) {
    guildLogWidgetsEnabled();
  }
}

export { addGuildLogWidgets as a };
//# sourceMappingURL=addGuildLogWidgets-5e905f2a.js.map
