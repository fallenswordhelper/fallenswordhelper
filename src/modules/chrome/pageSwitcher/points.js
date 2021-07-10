import getUrlParameter from '../../system/getUrlParameter';
import parseGoldUpgrades from '../notification/parseGoldUpgrades';
import upgrades from '../../upgrades';

export default function points() {
  if (getUrlParameter('type') === '1') {
    parseGoldUpgrades();
  } else {
    upgrades();
  }
}
