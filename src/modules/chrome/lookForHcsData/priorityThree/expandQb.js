import getValue from '../../../system/getValue';
import runDefault from '../../../common/runDefault';

export default function expandQb() {
  if (getValue('resizeQuickBuff')) {
    runDefault(import('../../interceptQuickBuff'));
  }
}
