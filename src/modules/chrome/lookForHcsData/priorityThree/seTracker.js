import jQueryPresent from '../../../common/jQueryPresent';
import calf from '../../../support/calf';

export default async function seTracker() {
  if (jQueryPresent() && calf.enableSeTracker && calf.cmd !== 'superelite') {
    const module = await import('../../../seLog/seLog');
    module.seLog();
  }
}
