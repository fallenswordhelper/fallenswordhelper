import { pointsUrl } from '../../support/constants';
import genericNotification from './genericNotification';
import notGoldUpgradesPage from './notGoldUpgradesPage';

export default function displayUpgradeMsg() {
  if (notGoldUpgradesPage()) {
    genericNotification(
      'stamina',
      'Upgrade stamina with gold',
      `${pointsUrl}&type=1`,
    );
  }
}
