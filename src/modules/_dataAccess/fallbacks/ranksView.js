import closestTr from '../../common/closestTr';
import createDocument from '../../system/createDocument';
import currentGuildId from '../../common/currentGuildId';
import getTextTrim from '../../common/getTextTrim';
import guildManage from '../../ajax/guildManage';
import { nowSecs } from '../../support/now';
import partial from '../../common/partial';
import querySelectorArray from '../../common/querySelectorArray';
import uniq from '../../common/uniq';
import { lastActivityRE, playerIDRE, playerLinkSelector } from '../../support/constants';

const guildXp = (el) => Number(getTextTrim(closestTr(el).cells[4]).replaceAll(',', ''));
const playerId = (el) => Number(playerIDRE.exec(el.href)[1]);
const level = (tipped) => Number(/Level:.+?(\d+)/.exec(tipped)[1]);
const rank = (el) => getTextTrim(closestTr(el).cells[3]);
const vl = (tipped) => Number(/VL:.+?(\d+)/.exec(tipped)[1]);

function lastActivityTimestamp(tipped) {
  const lastActivity = lastActivityRE.exec(tipped);
  const days = Number(lastActivity[1]);
  const hours = Number(lastActivity[2]) + days * 24;
  const mins = Number(lastActivity[3]) + hours * 60;
  const secs = Number(lastActivity[4]) + mins * 60;
  return nowSecs - secs;
}

function playerObject(el, tipped, mo) {
  return {
    current_stamina: Number(mo[1]),
    guild_id: currentGuildId(),
    guild_xp: guildXp(el),
    id: playerId(el),
    image_version: 0,
    last_activity: lastActivityTimestamp(tipped),
    level: level(tipped),
    max_stamina: Number(mo[2]),
    name: getTextTrim(el),
    rank: rank(el),
    vl: vl(tipped),
    xp: -1,
  };
}

function parsePlayerLink(el) {
  const { tipped } = el.dataset;
  const mo = tipped.match(/Stamina:<\/td><td>(\d{1,12}) \/ (\d{1,12})<\/td>/);
  return playerObject(el, tipped, mo);
}

function getRanks(players, firstPlayer, index) {
  return {
    id: index,
    members: players.filter((p) => p.rank === firstPlayer.rank),
    name: firstPlayer.rank,
    permissions: 0,
    tax: -1,
  };
}

export default async function ranksView() {
  const html = await guildManage();
  const doc = createDocument(html);
  const docPcc = doc.getElementById('pCC');
  const players = querySelectorArray(playerLinkSelector, docPcc).map(parsePlayerLink);
  const ranks = uniq(players, 'rank').map(partial(getRanks, players));
  return { r: ranks, s: true };
}
