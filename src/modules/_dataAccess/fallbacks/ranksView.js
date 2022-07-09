import closestTr from '../../common/closestTr';
import createDocument from '../../system/createDocument';
import currentGuildId from '../../common/currentGuildId';
import { getNowSecs } from '../../support/now';
import getTextTrim from '../../common/getTextTrim';
import guildManage from '../../ajax/guildManage';
import partial from '../../common/partial';
import querySelectorArray from '../../common/querySelectorArray';
import uniq from '../../common/uniq';
import {
  lastActivityRE,
  playerIDRE,
  playerLinkSelector,
  stamRe,
  vlRe,
} from '../../support/constants';

const guildXp = (el) => Number(getTextTrim(closestTr(el).cells[4]).replaceAll(',', ''));
const playerId = (el) => Number(playerIDRE.exec(el.href)[1]);
const rank = (el) => getTextTrim(closestTr(el).cells[3]);
const vl = (tipped) => Number(vlRe.exec(tipped)[1]);

function lastActivityTimestamp(tipped) {
  const lastActivity = lastActivityRE.exec(tipped);
  const days = Number(lastActivity[1]);
  const hours = Number(lastActivity[2]) + days * 24;
  const mins = Number(lastActivity[3]) + hours * 60;
  const secs = Number(lastActivity[4]) + mins * 60;
  return getNowSecs() - secs;
}

function fromElement(el) {
  return {
    guild_xp: guildXp(el),
    id: playerId(el),
    name: getTextTrim(el),
    rank: rank(el),
  };
}

function fromTipped(tipped) {
  const mo = tipped.match(stamRe);
  const ml = /Level:.+?(?<l>\d+)/.exec(tipped);
  return {
    current_stamina: Number(mo[1]),
    last_activity: lastActivityTimestamp(tipped),
    level: Number(ml[1]),
    max_stamina: Number(mo[2]),
    vl: vl(tipped),
  };
}

function parsePlayerLink(el) {
  return {
    guild_id: currentGuildId(),
    image_version: 0,
    xp: -1,
    ...fromElement(el),
    ...fromTipped(el.dataset.tipped),
  };
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
