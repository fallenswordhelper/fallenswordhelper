import jQueryPresent from '../../../common/jQueryPresent';
import trackerPrefStore from '../../../notepad/superelite/trackerPrefStore';
import calf from '../../../support/calf';

export default function seTracker() {
  if (jQueryPresent() && calf.enableSeTracker) {
    trackerPrefStore.set(calf.enableSeTracker);
  }
}
