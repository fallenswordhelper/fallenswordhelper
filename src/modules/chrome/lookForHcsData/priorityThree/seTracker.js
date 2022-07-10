import jQueryPresent from '../../../common/jQueryPresent';
import calf from '../../../support/calf';

export default function seTracker() {
  if (jQueryPresent() && calf.enableSeTracker && calf.cmd !== 'superelite') {
    import('../../../seLog/seLog').then((m) => m.seLog());
  }
}
