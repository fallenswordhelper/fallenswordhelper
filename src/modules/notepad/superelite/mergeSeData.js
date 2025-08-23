import fromEntries from '../../common/fromEntries';
import alpha from '../../common/alpha';
import uniq from '../../common/uniq';
import processOldMobs from './processOldMobs';

const merge = (a) => a.join('|');
const unmerge = (s) => s.split('|');

function processLogEntry(entry) {
  const { time, creature, playerId, playerName, location, drop } = entry;
  const locationMatches = location.match(/^(.*?)\s(\(\d+, \d+\))$/);
  return [
    time,
    creature.replace(' (Super Elite)', '').replaceAll(' ', '_'),
    playerId,
    playerName,
    locationMatches ? locationMatches[1] : 'realm unknown',
    locationMatches ? locationMatches[2] : 'coordinates unknown',
    drop,
  ];
}

const dedupeMobData = (mobs, oldMobs) =>
  uniq(mobs.map(merge).concat(oldMobs.map(merge)))
    .map(unmerge)
    .map(([time, mob, playerId, playerName, realm, coord, drop]) => [
      Number(time),
      mob,
      Number(playerId),
      playerName,
      realm,
      coord,
      drop,
    ])
    .sort(([ta], [tb]) => tb - ta);

const formatMobs = (realms) => (testDedupe) =>
  fromEntries(
    uniq(testDedupe.map(([, mob]) => mob)).map((mob) => [
      mob,
      testDedupe
        .filter(([, mb]) => mb === mob)
        .map(([time, , playerId, playerName, realm, coord, drop]) => [
          time,
          playerId,
          playerName,
          realms.findIndex((r) => r === realm),
          coord,
          drop,
        ])
        .slice(0, 10),
    ]),
  );

export default function mergeSeData(fshSeLog, data) {
  const mobs = data.map(processLogEntry);
  const oldMobs = processOldMobs(fshSeLog);
  const testDedupe = dedupeMobData(mobs, oldMobs);
  const realms = uniq(testDedupe.map(([, , , , realm]) => realm)).sort(alpha);
  const seData = formatMobs(realms)(testDedupe);
  return { seData, realms };
}
