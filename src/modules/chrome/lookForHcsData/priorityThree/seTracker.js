import calf from '../../../support/calf';
import jQueryPresent from '../../../common/jQueryPresent';

export default function seTracker() {
  if (jQueryPresent() && calf.enableSeTracker && calf.cmd !== 'superelite') {
    import('../../../seLog/seLog').then((m) => m.seLog());
  }
}
