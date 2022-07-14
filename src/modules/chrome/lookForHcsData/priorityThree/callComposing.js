import runDefault from '../../../common/runDefault';
import calf from '../../../support/calf';

export default function callComposing() {
  if (calf.enableComposingAlert) {
    runDefault(import('../../../composing/injectComposeAlert'));
  }
}
