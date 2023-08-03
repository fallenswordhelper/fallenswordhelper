import ranksView from '../../_dataAccess/fallbacks/ranksView';
import entries from '../../common/entries';
import fromEntries from '../../common/fromEntries';
import isNull from '../../common/isNull';
import keys from '../../common/keys';
import lastActivityToDays from '../../common/lastActivityToDays';
import numberIsNaN from '../../common/numberIsNaN';
import { nowSecs } from '../../support/now';
import fallback from '../../system/fallback';
import { get, set } from '../../system/idb';
import {
  cur, fshGuildActivity, gxp, lvl, max, utc, vl,
} from './indexConstants';

const toActivityRecord = (member) => [
  member.name,
  [
    lastActivityToDays(member.last_activity),
    member.current_stamina,
    member.level,
    member.max_stamina,
    nowSecs(),
    member.vl,
    member.guild_xp,
  ],
];
const eachRank = (thisRank) => thisRank.members.map(toActivityRecord);
const processGuild = (guild) => guild.r.flatMap(eachRank);

const testForChange = [
  (current) => !current,
  // Has current stam changed? probably want a weighted percentage here
  // Might only care if it has dropped significantly?
  (current, archive) => current[cur] !== archive[cur],
  // Has level changed?
  (current, archive) => current[lvl] !== archive[lvl],
  // Has Max Stam increased? probably want a weighted percentage here
  (current, archive) => current[max] > archive[max],
  // Has VL changed?
  (current, archive) => current[vl] !== archive[vl],
  // Has GXP changed? probably want a weighted percentage here
  (current, archive) => current[gxp] !== archive[gxp],
];

const noNull = (ary) => !ary.some(isNull);
const noNaN = (ary) => !ary.some(numberIsNaN);
const hasLength = ([, val]) => val.length;
const clean = ([key, val]) => [key, val.filter(noNull).filter(noNaN)];
const cleanArchive = (data) => entries(data.members || {}).map(clean).filter(hasLength);

const latest = (a, b) => (a[utc] > b[utc] ? a : b);
const onlyLatest = ([key, val]) => [key, val.reduce(latest)];
const toKeep = (current) => ([key, val]) => testForChange.some((fn) => fn(current[key]?.[0], val));
const toEntry = ([key, val]) => [key, [val]];

const oldRecords = (archiveLatestObj) => ([key, val]) => [
  key,
  val.filter((ary) => ary[utc] !== archiveLatestObj[key][utc]),
];

const oneDay = (archiveLatestObj) => ([key]) => !archiveLatestObj[key]
  || nowSecs() - archiveLatestObj[key][utc] >= 86100;

const merge = (archiveOldObj, archiveToKeepObj, currentNewObj) => ({
  lastUpdate: nowSecs(),
  members: fromEntries(
    keys({
      ...archiveOldObj,
      ...archiveToKeepObj,
      ...currentNewObj,
    }).map((key) => [key, [
      ...archiveOldObj[key] ?? [],
      ...(archiveToKeepObj[key] ?? []),
      ...(currentNewObj[key] ?? []),
    ]]),
  ),
});

function noChange(archiveClean) {
  if (!archiveClean) return;
  set(fshGuildActivity, { lastUpdate: nowSecs(), members: fromEntries(archiveClean) });
}

function makeChange(currentNew, archiveClean, archiveLatestObj) {
  if (!currentNew || !archiveClean || !archiveLatestObj) return;
  const currentNewObj = fromEntries(currentNew.map(toEntry));
  set(
    fshGuildActivity,
    merge(
      fromEntries(archiveClean.map(oldRecords(archiveLatestObj))),
      fromEntries(entries(archiveLatestObj).filter(toKeep(currentNewObj)).map(toEntry)),
      currentNewObj,
    ),
  );
}

function doMerge(archive, ranks) {
  const archiveClean = cleanArchive(archive);
  const archiveLatestObj = fromEntries(archiveClean.map(onlyLatest));
  const currentNew = processGuild(ranks).filter(oneDay(archiveLatestObj));
  if (currentNew.length) makeChange(currentNew, archiveClean, archiveLatestObj);
  else noChange(archiveClean);
}

async function getRanks(archive) {
  const ranks = await ranksView();
  if (ranks?.s) doMerge(archive, ranks);
}

const moreThanFiveMins = (archive) => nowSecs() > fallback(archive.lastUpdate, 0) + 300;

function checkLastUpdate(archive) {
  if (moreThanFiveMins(archive)) getRanks(archive);
}

export default async function guildActivity() {
  const archive = await get(fshGuildActivity);
  checkLastUpdate(archive ?? { lastUpdate: 0, members: {} });
}
