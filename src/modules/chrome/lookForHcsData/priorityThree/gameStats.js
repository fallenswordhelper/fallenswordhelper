import getValue from '../../../system/getValue';
import runDefault from '../../../common/runDefault';

export default function gameStats() {
  if (getValue('addServerNode')) {
    runDefault(import('../../injectServerNode'));
  }
}
