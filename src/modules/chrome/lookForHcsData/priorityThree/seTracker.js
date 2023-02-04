import jQueryPresent from '../../../common/jQueryPresent';
import calf from '../../../support/calf';

export default async function seTracker() {
  if (jQueryPresent() && calf.enableSeTracker && calf.cmd !== 'superelite') {
    const m = await import('../../../seLog/seLog');
    m.seLog();
  }
}
