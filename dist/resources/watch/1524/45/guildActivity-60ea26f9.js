import { l as lastActivityToDays, d as daGuildManage } from './lastActivityToDays-c7e9ad94.js';
import { V as nowSecs, s as partial, a5 as fallback } from './calfSystem-02fd040d.js';
import { c as cur, m as max, l as lvl, v as vl, g as gxp, a as act, u as utc } from './indexConstants-718f246e.js';
import { g as get, s as set } from './idb-d6386b46.js';
import './guild-7df4620b.js';
import './currentGuildId-b6506645.js';
import './guildView-a18c169e.js';
import './dataRows-17b071b0.js';
import './intValue-a6f9b475.js';

let oldArchive;
let guild;

function pushNewRecord(member) {
  oldArchive.members[member.name].push([
    lastActivityToDays(member.last_activity),
    member.current_stamina,
    member.level,
    member.max_stamina,
    nowSecs,
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
    archiveRecord[utc] = nowSecs;
  }
}

function processMemberRecord(newArchive, member) {
  initMember(member);
  const archiveMember = oldArchive.members[member.name];
  const archiveRecord = archiveMember[archiveMember.length - 1];
  const archiveAge = nowSecs - archiveRecord[utc];
  if (archiveAge >= 86100) {
    upsert(archiveRecord, member);
  }
  // eslint-disable-next-line no-param-reassign
  newArchive.members[member.name] = oldArchive.members[member.name];
}

function processRank(newArchive, rank) {
  rank.members.forEach(partial(processMemberRecord, newArchive));
}

function doMerge() { // jQuery.min
  const newArchive = { lastUpdate: nowSecs, members: {} };
  guild.r.ranks.forEach(partial(processRank, newArchive));
  set('fsh_guildActivity', newArchive);
}

function gotGuild(data) {
  if (data && data.r) {
    guild = data;
    doMerge();
  }
}

function gotActivity(data) { // jQuery.min
  if (data) {
    oldArchive = data;
  } else {
    oldArchive = { lastUpdate: 0, members: {} };
  }
  if (nowSecs > fallback(oldArchive.lastUpdate, 0) + 300) { // 5 mins - probably want to increase
    daGuildManage().then(gotGuild);
  }
}

function guildActivity() { // jQuery.min
  get('fsh_guildActivity').then(gotActivity);
}

export default guildActivity;
//# sourceMappingURL=guildActivity-60ea26f9.js.map
