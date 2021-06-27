import calf from '../../../support/calf';
import runDefault from '../../../common/runDefault';

export default function callUpgrade() {
  if (calf.enableUpgradeAlert) {
    runDefault(import('../../notification/injectUpgradeAlert'));
  }
}
