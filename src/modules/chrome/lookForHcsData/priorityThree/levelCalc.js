import getValue from '../../../system/getValue';
import runDefault from '../../../common/runDefault';

export default function levelCalc() {
  if (getValue('levelUpCalculator')) {
    runDefault(import('../../calcs/injectLevelupCalculator'));
  }
}
