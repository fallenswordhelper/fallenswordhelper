import guildManage from '../../ajax/guildManage';
import closestTr from '../../common/closestTr';
import currentGuildId from '../../common/currentGuildId';
import getTextTrim from '../../common/getTextTrim';
import lastActivity from '../../common/lastActivity';
import partial from '../../common/partial';
import playerIdFromAnchor from '../../common/playerIdFromAnchor';
import querySelectorArray from '../../common/querySelectorArray';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import regExpGroups from '../../common/regExpGroups';
import uniq from '../../common/uniq';
import {
  playerLinkSelector,
  stamRe,
  vlRe,
} from '../../support/constants';
import createDocument from '../../system/createDocument';

const guildXp = (el) =>
  Number(getTextTrim(closestTr(el)?.cells[4])?.replaceAll(',', ''));
const rank = (el) => getTextTrim(closestTr(el)?.cells[3]);
const vl = (tipped) => Number(regExpFirstCapture(vlRe, tipped));

function fromElement(el) {
  return {
    guild_xp: guildXp(el),
    id: playerIdFromAnchor(el),
    name: getTextTrim(el),
    rank: rank(el),
  };
}

function fromTipped(tipped) {
  const { stam, max } = regExpGroups(stamRe, tipped);
  return {
    current_stamina: Number(stam),
    last_activity: lastActivity(tipped).timestamp,
    level: Number(regExpFirstCapture(/Level:.+?(?<l>\d+)/, tipped)),
    max_stamina: Number(max),
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
  if (!docPcc) return { e: { code: 0, message: 'Failure' }, s: false };
  const players = querySelectorArray(playerLinkSelector, docPcc).map(
    parsePlayerLink,
  );
  const ranks = uniq(players, 'rank').map(partial(getRanks, players));
  return { r: ranks, s: true };
}
