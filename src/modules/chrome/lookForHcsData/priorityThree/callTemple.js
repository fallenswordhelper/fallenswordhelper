import runDefault from '../../../common/runDefault';
import calf from '../../../support/calf';

export default function callTemple() {
  if (calf.enableTempleAlert) {
    runDefault(import('../../notification/injectTempleAlert'));
  }
}
