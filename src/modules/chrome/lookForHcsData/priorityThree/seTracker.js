import jQueryPresent from '../../../common/jQueryPresent';
import calf from '../../../support/calf';

export default async function seTracker() {
  if (jQueryPresent() && calf.enableSeTracker) {
    const trackerPrefStore = await import('../../../notepad/superelite/trackerPrefStore');
    trackerPrefStore.default.set(calf.enableSeTracker);
  }
}
