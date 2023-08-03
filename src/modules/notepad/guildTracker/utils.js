import guildMembers from '../../_dataAccess/export/guildMembers';
import alpha from '../../common/alpha';
import currentGuildId from '../../common/currentGuildId';
import download from '../../common/download';
import entries from '../../common/entries';
import formatUtcDateTime from '../../common/formatUtcDateTime';
import fromEntries from '../../common/fromEntries';
import keys from '../../common/keys';
import { get, set } from '../../system/idb';
import padZ from '../../system/padZ';
import {
  act, cur, fshGuildActivity, gxp, lvl, max, utc, vl,
} from './indexConstants';

const formatTimestamp = (timestamp) => formatUtcDateTime(new Date(timestamp * 1000));

const formatUtc = (sub) => [
  sub[act],
  sub[cur],
  sub[lvl],
  sub[max],
  formatTimestamp(sub[utc]),
  sub[vl],
  sub[gxp],
];

const flatten = (lastUpdateString) => ([name, ary]) => ary.map(formatUtc).map((rec) => [
  lastUpdateString,
  name,
  ...rec,
].join(','));

const header = 'Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n';

export function createCsv(data) {
  const { lastUpdate, members } = data;
  const csv = entries(members).flatMap(flatten(formatTimestamp(lastUpdate))).join('\n');
  return `${header}${csv}`;
}

const formatDateTime = (dtPartAry) => `${dtPartAry[0]}${dtPartAry[1]}${dtPartAry[2]}${
  dtPartAry[3]}${dtPartAry[4]}${dtPartAry[5]}`;

const dateParts = [
  (aDate) => aDate.getFullYear().toString(),
  (aDate) => aDate.getMonth() + 1,
  (aDate) => aDate.getDate(),
  (aDate) => aDate.getHours(),
  (aDate) => aDate.getMinutes(),
  (aDate) => aDate.getSeconds(),
];

const parts = (rt) => (fn) => fn(rt);

function filedate() {
  return formatDateTime(dateParts.map(parts(new Date())).map(padZ));
}

export async function downloadFile(translate, type) {
  const raw = await get(fshGuildActivity);
  if (!raw.lastUpdate || !raw.members) return;
  const data = translate(raw);
  const blob = new Blob([data], { type });
  const filename = `${filedate()}_GuildTracker.${type.split('/')[1]}`;
  download(blob, filename);
}

export async function purgeByUser(selected) {
  const raw = await get(fshGuildActivity);
  const lessActivity = {
    lastUpdate: raw.lastUpdate,
    members: fromEntries(
      entries(raw.members).filter(([key]) => key !== selected),
    ),
  };
  set(fshGuildActivity, lessActivity);
}

export async function purgeByDate(dateAsTimestamp) {
  const raw = await get(fshGuildActivity);
  const lessActivity = {
    lastUpdate: raw.lastUpdate,
    members: fromEntries(
      entries(raw.members).map(([key, val]) => [
        key,
        val.filter((ary) => ary[utc] > dateAsTimestamp),
      ]),
    ),
  };
  set(fshGuildActivity, lessActivity);
}

const notFound = (currentMembers) => (user) => !currentMembers.find((name) => name === user);

export async function retired() {
  const [raw, memberlist] = await Promise.all([
    get(fshGuildActivity),
    guildMembers(currentGuildId()),
  ]);
  const currentMembers = memberlist.map(({ username }) => username);
  return keys(raw.members).filter(notFound(currentMembers)).sort(alpha);
}
