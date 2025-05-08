import fromEntries from '../../common/fromEntries';
import uniq from '../../common/uniq';
import processOldMobs from './processOldMobs';

const merge = (a) => a.join('|');

const processSeData = (data, serverTime) => data.r.map((o) => [
  serverTime - o.time,
  o.creature.name.replace(' (Super Elite)', '').replaceAll(' ', '_'),
  o.realm.realm.id,
  o.realm.realm.name,
]);

const dedupeMobData = (mobs, oldMobs) => uniq(mobs.map(merge).concat(oldMobs.map(merge)))
  .map((s) => s.split('|'))
  .map(([time, mob, realmId, location]) => [Number(time), mob, Number(realmId), location])
  .sort(([ta], [tb]) => tb - ta);

const formatMobs = (testDedupe) => fromEntries(
  uniq(testDedupe.map(([, mob]) => mob))
    .map((mob) => [
      mob,
      testDedupe
        .filter(([, mb]) => mb === mob)
        .map(([time,, realmId]) => [time, realmId])
        .slice(0, 10),
    ]),
);

const formatLocations = (testDedupe) => fromEntries(
  uniq(testDedupe.map(([,, realmId]) => realmId))
    .map((realmId) => [
      realmId,
      testDedupe.find(([,, rid]) => rid === realmId)[3],
    ]),
);

const prepareForStorage = (testDedupe) => ({
  se: formatMobs(testDedupe),
  loc: formatLocations(testDedupe),
});

export default function mergeSeData(fshSeLog, data) {
  const serverTime = Number(data.t.split(' ')[1]);
  const mobs = processSeData(data, serverTime);
  const oldMobs = processOldMobs(fshSeLog);
  const testDedupe = dedupeMobData(mobs, oldMobs);
  const clean = prepareForStorage(testDedupe);
  return { lastUpdate: serverTime, ...clean };
}
