import entries from '../../common/entries';
import isArray from '../../common/isArray';

export default function processOldMobs(fshSeLog) {
  return entries(fshSeLog?.seData ?? {}).flatMap(([mob, val]) =>
    isArray(val)
      ? val.map(([time, playerId, playerName, realmId, coord, drop]) => [
          time,
          mob,
          playerId,
          playerName,
          fshSeLog?.realms[realmId],
          coord,
          drop,
        ])
      : [[val, mob.replaceAll(' ', '_'), 0, '', '', '', '']],
  );
}
