import upgradesGold from '../../ajax/upgradesGold';
import jQueryPresent from '../../common/jQueryPresent';
import { now } from '../../support/now';
import task from '../../support/task';
import getValue from '../../system/getValue';
import displayUpgradeMsg from './displayUpgradeMsg';
import notGoldUpgradesPage from './notGoldUpgradesPage';
import parseGoldUpgrades from './parseGoldUpgrades';

function asyncParse(data) {
  task(3, parseGoldUpgrades, [data]);
}

function checkLastUpgrade() {
  const lastUpgradeCheck = getValue('lastUpgradeCheck');
  if (lastUpgradeCheck && now() < lastUpgradeCheck) { return; }
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
