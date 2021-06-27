import getValue from '../../../system/getValue';
import runDefault from '../../../common/runDefault';

export default function fsBoxLog() {
  if (getValue('fsboxlog')) {
    runDefault(import('../../injectFSBoxLog'));
  }
}
