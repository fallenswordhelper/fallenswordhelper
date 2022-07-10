import runDefault from '../common/runDefault';
import getValue from '../system/getValue';

export default function doStatTotal() {
  if (getValue('showStatBonusTotal')) {
    runDefault(import('../common/addStatTotalToMouseover'));
  }
}
