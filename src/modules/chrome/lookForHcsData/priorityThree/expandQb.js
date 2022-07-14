import runDefault from '../../../common/runDefault';
import getValue from '../../../system/getValue';

export default function expandQb() {
  if (getValue('resizeQuickBuff')) {
    runDefault(import('../../interceptQuickBuff'));
  }
}
