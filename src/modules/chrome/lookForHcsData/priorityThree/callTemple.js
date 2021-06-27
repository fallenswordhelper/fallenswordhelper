import calf from '../../../support/calf';
import runDefault from '../../../common/runDefault';

export default function callTemple() {
  if (calf.enableTempleAlert) {
    runDefault(import('../../notification/injectTempleAlert'));
  }
}
