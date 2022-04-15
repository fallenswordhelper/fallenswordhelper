import addRows from './addRows';
import getKillsPct from '../../../guild/scoutTower/getKillsPct';
import getTitanString from '../../../guild/scoutTower/getTitanString';
import { months } from '../../../support/constants';
import { now } from '../../../support/now';
import padZ from '../../../system/padZ';
import partial from '../../../common/partial';
import { realmName } from './realm';
import roundToString from '../../../common/roundToString';
import setInnerHtml from '../../../dom/setInnerHtml';
import setText from '../../../dom/setText';
import textSpan from '../../../common/cElement/textSpan';
import trimTitanName from '../../../common/trimTitanName';
import { clearMemberRows, titanTbl } from './buildTitanInfoTable';
import {
  cooldownText,
  currentHp,
  currentPct,
  guildKills,
  maxHp,
  statusText,
  titanLocation,
  titanName,
  totalPct,
} from './placeholders';
import { titanId, titanLoc } from './hasTitan';

function formatOffset(secs) {
  const aDate = new Date(now + secs * 1000);
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

function setAllText(ary) {
  ary.forEach(([txt, ctx]) => { setText(txt, ctx); });
}

function doTopLabels(ourTitan) {
  setAllText([
    [trimTitanName(ourTitan.creature.name), titanName],
    [titanLoc, titanLocation],
    [ourTitan.current_hp, currentHp],
    [ourTitan.max_hp, maxHp],
    [ourTitan.kills, guildKills],
    [currentPctText(ourTitan), currentPct],
    [totalPctText(ourTitan), totalPct],
  ]);
  setInnerHtml(statusTextHtml(ourTitan), statusText);
  setInnerHtml(getCooldownHtml(ourTitan.cooldown), cooldownText);
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
  addRows(titanTbl, memberRows);
}

function currentTitan(el) {
  return el.realm && el.creature.base_id === titanId && el.realm === realmName;
}

export default function processTitans(r) {
  const ourTitan = r.find(currentTitan);
  if (ourTitan) {
    doTopLabels(ourTitan);
    doMemberRows(ourTitan);
  }
}
