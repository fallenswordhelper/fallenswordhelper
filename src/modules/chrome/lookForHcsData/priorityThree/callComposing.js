import calf from '../../../support/calf';
import runDefault from '../../../common/runDefault';

export default function callComposing() {
  if (calf.enableComposingAlert) {
    runDefault(import('../../../composing/injectComposeAlert'));
  }
}
