import runDefault from '../../../common/runDefault';
import getValue from '../../../system/getValue';

export default function staminaCalc() {
  if (getValue('staminaCalculator')) {
    runDefault(import('../../calcs/injectStaminaCalculator'));
  }
}
