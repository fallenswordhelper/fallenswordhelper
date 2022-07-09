import displayUpgradeMsg from './displayUpgradeMsg';
import { getNow } from '../../support/now';
import getValue from '../../system/getValue';
import jQueryPresent from '../../common/jQueryPresent';
import notGoldUpgradesPage from './notGoldUpgradesPage';
import parseGoldUpgrades from './parseGoldUpgrades';
import task from '../../support/task';
import upgradesGold from '../../ajax/upgradesGold';

function asyncParse(data) {
  task(3, parseGoldUpgrades, [data]);
}

function checkLastUpgrade() {
  const lastUpgradeCheck = getValue('lastUpgradeCheck');
  if (lastUpgradeCheck && getNow() < lastUpgradeCheck) { return; }
  upgradesGold().then(asyncParse);
}

function notUpgradesPage() {
  if (getValue('needToDoUpgrade')) {
    displayUpgradeMsg();
    return;
  }
  checkLastUpgrade();
}

export default function injectUpgradeAlert() {
  if (jQueryPresent() && notGoldUpgradesPage()) {
    notUpgradesPage();
  }
}
