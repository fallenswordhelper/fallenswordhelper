import textSpan from '../../../common/cElement/textSpan';
import partial from '../../../common/partial';
import roundToString from '../../../common/roundToString';
import trimTitanName from '../../../common/trimTitanName';
import setInnerHtml from '../../../dom/setInnerHtml';
import setText from '../../../dom/setText';
import getKillsPct from '../../../guild/scoutTower/getKillsPct';
import getTitanString from '../../../guild/scoutTower/getTitanString';
import { months } from '../../../support/constants';
import { now } from '../../../support/now';
import padZ from '../../../system/padZ';
import addRows from './addRows';
import { clearMemberRows, getTitanTbl } from './buildTitanInfoTable';
import { getTitanId, getTitanLoc } from './hasTitan';
import {
  getCooldownText,
  getCurrentHp,
  getCurrentPct,
  getGuildKills,
  getMaxHp,
  getStatusText,
  getTitanLocation,
  getTitanName,
  getTotalPct,
} from './placeholders';
import { getRealmName } from './realm';

function formatOffset(secs) {
  const aDate = new Date(now() + secs * 1000);
  return `${padZ(aDate.getHours())}:${padZ(aDate.getMinutes())} ${
    padZ(aDate.getDate())}/${months[aDate.getMonth()]}/${
    aDate.getFullYear()}`;
}

function getCooldownHtml(cooldown) {
  if (cooldown <= 0) {
    return '<span class="fshGreen cooldown">No active cooldown</span>';
  }
  return `<span class="fshMaroon cooldown">Cooldown until: ${
    formatOffset(cooldown)
  }</span>`;
}

function currentPctText(ourTitan) {
  return roundToString(getKillsPct(ourTitan.max_hp - ourTitan.current_hp, ourTitan.kills), 2);
}

function totalPctText(ourTitan) {
  return roundToString((ourTitan.kills * 100) / ourTitan.max_hp, 2);
}

function statusTextHtml(ourTitan) {
  return getTitanString(ourTitan.kills, ourTitan.max_hp, ourTitan.current_hp);
}

function setAllText(ourTitan) {
  [
    [trimTitanName(ourTitan.creature.name), getTitanName],
    [getTitanLoc(), getTitanLocation],
    [ourTitan.current_hp, getCurrentHp],
    [ourTitan.max_hp, getMaxHp],
    [ourTitan.kills, getGuildKills],
    [currentPctText(ourTitan), getCurrentPct],
    [totalPctText(ourTitan), getTotalPct],
  ].forEach(([txt, ctx]) => setText(txt, ctx()));
}

function doTopLabels(ourTitan) {
  setAllText(ourTitan);
  setInnerHtml(statusTextHtml(ourTitan), getStatusText());
  setInnerHtml(getCooldownHtml(ourTitan.cooldown), getCooldownText());
}

function memberRow(ourTitan, member) {
  return [[
    [2, textSpan(member.player.name)],
    [2, textSpan(member.kills.toString())],
    [2, textSpan(`${roundToString((member.kills * 100) / ourTitan.kills, 2)}%`)],
  ]];
}

function doMemberRows(ourTitan) {
  clearMemberRows();
  if (!ourTitan.contributors) { return; }
  const memberRows = ourTitan.contributors.map(partial(memberRow, ourTitan));
  addRows(getTitanTbl(), memberRows);
}

function currentTitan(el) {
  return el.realm && el.creature.base_id === getTitanId() && el.realm === getRealmName();
}

export default function processTitans(r) {
  const ourTitan = r.find(currentTitan);
  if (ourTitan) {
    doTopLabels(ourTitan);
    doMemberRows(ourTitan);
  }
}
