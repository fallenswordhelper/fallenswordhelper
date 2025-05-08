import runDefault from '../../../common/runDefault';
import getValue from '../../../system/getValue';

export default function gameStats() {
  if (getValue('addServerNode')) {
    runDefault(import('../../injectServerNode'));
  }
}
