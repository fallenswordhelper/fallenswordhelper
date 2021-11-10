import calf from '../../support/calf';
import createDocument from '../../system/createDocument';
import displayUpgradeMsg from './displayUpgradeMsg';
import getTextTrim from '../../common/getTextTrim';
import notGoldUpgradesPage from './notGoldUpgradesPage';
import querySelectorAll from '../../common/querySelectorAll';
import setValue from '../../system/setValue';

function findDoc(data) {
  if (notGoldUpgradesPage()) {
    return createDocument(data);
  }
  const boxes = querySelectorAll('#pCC input[name="quantity"]');
  boxes[0].value = '100';
  boxes[1].value = '10';
  return document;
}

function checkUpgrade(limit) {
  const checkDoneUpgrade = getTextTrim(limit).split(' / ');
  if (checkDoneUpgrade[0] !== checkDoneUpgrade[1]) {
    displayUpgradeMsg();
    setValue('needToDoUpgrade', true);
  } else {
    setValue('needToDoUpgrade', false);
    setValue('lastUpgradeCheck', Date.parse(`${getTextTrim(limit.nextElementSibling)} GMT`));
  }
}

export default function parseGoldUpgrades(data) {
  if (!calf.enableUpgradeAlert) { return; }
  const doc = findDoc(data);
  const tables = querySelectorAll('#pCC > table', doc);
  if (tables.length > 0) {
    const limit = tables[tables.length - 1].rows[3].cells[2];
    checkUpgrade(limit);
  }
}
