import runDefault from '../../../common/runDefault';
import getValue from '../../../system/getValue';

export default function levelCalc() {
  if (getValue('levelUpCalculator')) {
    runDefault(import('../../calcs/injectLevelupCalculator'));
  }
}
