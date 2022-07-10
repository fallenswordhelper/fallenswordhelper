import getUrlParameter from '../../system/getUrlParameter';
import upgrades from '../../upgrades';
import parseGoldUpgrades from '../notification/parseGoldUpgrades';

export default function points() {
  if (getUrlParameter('type') === '1') {
    parseGoldUpgrades();
  } else {
    upgrades();
  }
}
