import entries from '../../common/entries';
import isArray from '../../common/isArray';

export default function processOldMobs(fshSeLog) {
  return entries(fshSeLog?.se ?? {}).flatMap(([mob, val]) =>
    isArray(val)
      ? val.map(([time, realmId]) => [
          time,
          mob,
          realmId,
          fshSeLog?.loc[realmId],
        ])
      : [[val, mob.replaceAll(' ', '_'), 0, '']],
  );
}
