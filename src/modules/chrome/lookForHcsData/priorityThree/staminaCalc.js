import getValue from '../../../system/getValue';
import runDefault from '../../../common/runDefault';

export default function staminaCalc() {
  if (getValue('staminaCalculator')) {
    runDefault(import('../../calcs/injectStaminaCalculator'));
  }
}
