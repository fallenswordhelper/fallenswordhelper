import runDefault from '../../../common/runDefault';
import calf from '../../../support/calf';

export default function callUpgrade() {
  if (calf.enableUpgradeAlert) {
    runDefault(import('../../notification/injectUpgradeAlert'));
  }
}
