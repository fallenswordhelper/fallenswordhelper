import runDefault from '../../../common/runDefault';
import getValue from '../../../system/getValue';

export default function fsBoxLog() {
  if (getValue('fsboxlog')) {
    runDefault(import('../../injectFSBoxLog'));
  }
}
