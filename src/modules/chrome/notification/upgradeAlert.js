import daUpgradesGold from '../../_dataAccess/daUpgradesGold';
import jQueryPresent from '../../common/jQueryPresent';
import parseGoldUpgrades from '../../common/parseGoldUpgrades';
import querySelectorAll from '../../common/querySelectorAll';
import calf from '../../support/calf';
import { pointsUrl } from '../../support/constants';
import { now } from '../../support/now';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';
import genericNotification from './genericNotification';

function goldUpgradesPage() {
  return window.location.search.indexOf('cmd=points&type=1') !== -1;
}

function displayUpgradeMsg() {
  if (!goldUpgradesPage()) {
    genericNotification(
      'stamina',
      'Upgrade stamina with gold',
      `${pointsUrl}&type=1`,
    );
  }
}

function checkUpgrade(response) {
  if (response.current !== 10) {
    displayUpgradeMsg();
    setValue('needToDoUpgrade', true);
  } else {
    setValue('needToDoUpgrade', false);
    setValue('lastUpgradeCheck', response.reset_time * 1000);
  }
}

function fillBoxes() {
  const boxes = querySelectorAll('#pCC input[name="quantity"]');
  boxes[0].value = '100';
  boxes[1].value = '10';
}

export async function checkGoldUpgrades() {
  if (goldUpgradesPage()) fillBoxes();
  if (!calf.enableUpgradeAlert) return;
  const response = goldUpgradesPage()
    ? parseGoldUpgrades(document)
    : await daUpgradesGold();
  if (!response.s) return;
  checkUpgrade(response.r[1]);
}

function notUpgradesPage() {
  if (getValue('needToDoUpgrade')) {
    displayUpgradeMsg();
    return;
  }
  const lastUpgradeCheck = getValue('lastUpgradeCheck');
  if (!lastUpgradeCheck || now() > lastUpgradeCheck) checkGoldUpgrades();
}

export function injectUpgradeAlert() {
  if (calf.enableUpgradeAlert && jQueryPresent() && !goldUpgradesPage()) {
    notUpgradesPage();
  }
}
