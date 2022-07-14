import { entries } from 'idb-keyval';
import ranksView from '../../../_dataAccess/fallbacks/ranksView';
import fromEntries from '../../../common/fromEntries';
import lastActivityToDays from '../../../common/lastActivityToDays';
import partial from '../../../common/partial';
import { getNowSecs } from '../../../support/now';
import fallback from '../../../system/fallback';
import { get, set } from '../../../system/idb';
import {
  act, cur, gxp, lvl, max, utc, vl,
} from './indexConstants';

let oldArchive = 0;

function pushNewRecord(member) {
  oldArchive.members[member.name].push([
    lastActivityToDays(member.last_activity),
    member.current_stamina,
    member.level,
    member.max_stamina,
    getNowSecs(),
    member.vl,
    member.guild_xp,
  ]);
}

function initMember(member) {
  if (!oldArchive.members[member.name]) {
    oldArchive.members[member.name] = [];
    pushNewRecord(member);
  }
}

const type2tests = [
  // Has current stam changed ?
  // probably want a weighted percentage here
  // Might only care if it has dropped significantly ?
  (archive, current) => current.current_stamina !== archive[cur],
  // Has Max Stam increased ?
  // probably want a weighted percentage here
  (archive, current) => current.max_stamina > archive[max],
  // Has level changed ?
  (archive, current) => current.level !== archive[lvl],
  // Has VL changed ?
  (archive, current) => current.vl !== archive[vl],
  // Has GXP changed ?
  // probably want a weighted percentage here
  (archive, current) => current.guild_xp !== archive[gxp],
];

function change(archiveRecord, member, test) {
  return test(archiveRecord, member);
}

function hasChanged(archiveRecord, member) {
  return type2tests.some(partial(change, archiveRecord, member));
}

function upsert(archiveRecord, member) {
  if (hasChanged(archiveRecord, member)) {
    pushNewRecord(member);
  } else {
    // eslint-disable-next-line no-param-reassign
    archiveRecord[act] = lastActivityToDays(member.last_activity);
    // eslint-disable-next-line no-param-reassign
    archiveRecord[utc] = getNowSecs();
  }
}

function processMemberRecord(newArchive, member) {
  initMember(member);
  const archiveMember = oldArchive.members[member.name];
  const archiveRecord = archiveMember[archiveMember.length - 1];
  const archiveAge = getNowSecs() - archiveRecord[utc];
  if (archiveAge >= 86100) {
    upsert(archiveRecord, member);
  }
  // eslint-disable-next-line no-param-reassign
  newArchive.members[member.name] = oldArchive.members[member.name];
}

function processRank(newArchive, rank) {
  rank.members.forEach(partial(processMemberRecord, newArchive));
}

function doMerge(guild) {
  const newArchive = { lastUpdate: getNowSecs(), members: {} };
  guild.r.forEach(partial(processRank, newArchive));
  set('fsh_guildActivity', newArchive);
}

function gotGuild(data) {
  if (data?.r) {
    doMerge(data);
  }
}

function trimActivity(members) {
  const aYearAgo = getNowSecs() - (365 * 24 * 60 * 60);
  return fromEntries(
    entries(members)
      .map(([name, record]) => [name, record.filter((r) => r[utc] > aYearAgo)]),
  );
}

function getOld(data) {
  const loseData = 0;
  if (loseData && data) {
    return { ...data, members: trimActivity(data.members) };
  }
  return data ?? { lastUpdate: 0, members: {} };
}

async function gotActivity(data) {
  oldArchive = getOld(data);
  // 5 mins - probably want to increase
  if (getNowSecs() > fallback(oldArchive.lastUpdate, 0) + 300) {
    const json = await ranksView();
    gotGuild(json);
  }
}

export default async function guildActivity() {
  const data = await get('fsh_guildActivity');
  gotActivity(data);
}
