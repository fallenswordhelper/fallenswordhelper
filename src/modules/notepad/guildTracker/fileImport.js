import entries from '../../common/entries';
import fromEntries from '../../common/fromEntries';
import isNull from '../../common/isNull';
import jsonParse from '../../common/jsonParse';
import numberIsNaN from '../../common/numberIsNaN';
import uniq from '../../common/uniq';
import { get, set } from '../../system/idb';
import {
  act, cur, fshGuildActivity, gxp, lvl, max, utc, vl,
} from './indexConstants';

const flattenMember = ([name, ary]) => ary.map((rec) => [name, ...rec]);

function flatten(activity) {
  return entries(activity?.members ?? {}).flatMap(flattenMember);
}

function hopefullyJson(unsafe) {
  const fileJson = jsonParse(unsafe);
  const fileActivity = flatten(fileJson);
  return [fileJson?.lastUpdate ?? 0, fileActivity];
}

const lineSplit = (str) => str.split(',');
const stringToTimestamp = (str) => Date.parse(`${str.replace(' ', 'T')}Z`) / 1000;
const memberRecord = ([, member, ...rec]) => [
  member,
  Number(rec[act]),
  Number(rec[cur]),
  Number(rec[lvl]),
  Number(rec[max]),
  stringToTimestamp(rec[utc]),
  Number(rec[vl]),
  Number(rec[gxp]),
];

function hopefullyCsv(unsafe) {
  const records = unsafe.split('\n').slice(1).map(lineSplit);
  return [
    stringToTimestamp(records[0][0]),
    records.map(memberRecord),
  ];
}

function processFile(unsafe) {
  if (unsafe.startsWith('{')) return hopefullyJson(unsafe);
  return hopefullyCsv(unsafe);
}

const noNull = (ary) => !ary.some(isNull);
const noNaN = ([, ...ary]) => !ary.some(numberIsNaN);
const byUtc = ([, ...a], [, ...b]) => a[utc] - b[utc];
const addDate = ([name, ...rec]) => [
  name,
  Math.trunc(rec[utc] / (60 * 60 * 24)),
  ...rec,
];
const fakeKey = ([name, date]) => `${name}|${date}`;
const splitKey = (str) => str.split('|');
const dateNum = ([name, dateStr]) => [name, Number(dateStr)];
const thisDate = (name, date) => ([nm, dt]) => nm === name && dt === date;
const oneRec = (withDate) => ([name, date]) => withDate.find(thisDate(name, date));
const removeDate = ([name,, ...rec]) => [name, ...rec];

function combineActivity(guildActivity, fileActivity) {
  const withDate = guildActivity
    .concat(fileActivity)
    .filter(noNull)
    .filter(noNaN)
    .sort(byUtc)
    .map(addDate);
  const base = uniq(withDate.map(fakeKey))
    .map(splitKey)
    .map(dateNum)
    .map(oneRec(withDate))
    .map(removeDate);
  return base;
}

const getName = ([name]) => name;
const others = ([, ...rec]) => [...rec];

function buildMembers(combined) {
  return fromEntries(
    uniq(combined.map(getName)).map(
      (name) => [
        name,
        combined.filter(([cn]) => cn === name).map(others),
      ],
    ),
  );
}

export default async function fileImport(file, overwrite) {
  const [raw, fileContent] = await Promise.all([
    get(fshGuildActivity),
    file.text(),
  ]);
  const guildFlatActivity = overwrite ? [] : flatten(raw);
  const [fileUpdate, fileActivity] = processFile(fileContent);
  const lastUpdate = raw.lastUpdate ?? fileUpdate ?? 0;
  const combined = combineActivity(guildFlatActivity, fileActivity);
  const result = { lastUpdate, members: buildMembers(combined) };
  set(fshGuildActivity, result);
}
