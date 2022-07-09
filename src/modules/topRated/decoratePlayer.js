import currentGuildId from '../common/currentGuildId';
import { getNowSecs } from '../support/now';
import getValue from '../system/getValue';
import { guildRE } from '../support/constants';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import isUndefined from '../common/isUndefined';
import onlineDot from '../common/onlineDot';
import { getLowerPvpLevel, getUpperPvpLevel } from '../common/levelHighlight';

let highlightPlayersNearMyLvl = 0;
let myGuildId = 0;

function getPref() {
  highlightPlayersNearMyLvl = getValue('highlightPlayersNearMyLvl');
  return highlightPlayersNearMyLvl;
}

function getMyGuildId() {
  myGuildId = currentGuildId();
  return myGuildId;
}

const highlightTests = [
  () => highlightPlayersNearMyLvl || getPref(),
  (guildId) => isUndefined(guildId) || guildId !== (myGuildId || getMyGuildId()),
  (guildId, data) => data.last_login >= getNowSecs() - 604800,
  (guildId, data) => data.virtual_level >= getLowerPvpLevel(),
  (guildId, data) => data.virtual_level <= getUpperPvpLevel(),
];

function getGuild(tbl) {
  if (tbl.rows[0].cells[0].children[0]) {
    return Number(guildRE.exec(tbl.rows[0].cells[0].children[0].href)[1]);
  }
}

function pvpHighlight(guildId, data) {
  return highlightTests.every((el) => el(guildId, data));
}

export default function decoratePlayer(aTable, data) {
  const guildId = getGuild(aTable);
  insertHtmlBeforeEnd(aTable.rows[0], `<td>${onlineDot({ last_login: data.last_login })}</td>`);
  if (pvpHighlight(guildId, data)) {
    aTable.parentNode.parentNode.classList.add('lvlHighlight');
  }
}
