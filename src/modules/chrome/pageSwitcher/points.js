import getUrlParameter from '../../system/getUrlParameter';
import upgrades from '../../upgrades';
import { checkGoldUpgrades } from '../notification/upgradeAlert';

export default function points() {
  if (getUrlParameter('type') === '1') {
    checkGoldUpgrades();
  } else {
    upgrades();
  }
}
