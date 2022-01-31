import notWorld from './notWorld';
import { blacksmithUrl, defSubcmd } from '../../support/constants';

export default function doRepair() {
  // do not use repair link for new map
  notWorld('doRepair', `${blacksmithUrl + defSubcmd}repairall&fromworld=1`);
}
