import { derived } from 'svelte/store';
import uniq from '../../common/uniq';
import processOldMobs from './processOldMobs';
import seLogStore from './seLogStore';
import trackerPrefStore from './trackerPrefStore';

const trackerTableStore = derived(
  [trackerPrefStore, seLogStore],
  ([$trackerPrefStore, $seLogStore], set) => {
    if ($seLogStore && $trackerPrefStore) {
      const oldMobs = processOldMobs($seLogStore);
      const prepared = uniq(oldMobs.map(([, mob]) => mob))
        .map((mob) => [
          mob,
          oldMobs
            .filter(([, mb]) => mb === mob)
            .map(([time,,, realm]) => [time, realm]),
        ])
        .map(([mob, locAry]) => [mob, locAry[0][0], locAry[0][1], locAry.slice(1)]);
      set(prepared);
    } else set();
  },
);

export default trackerTableStore;
