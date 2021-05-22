import { aa as pointsUrl, ab as insertHtmlAfterBegin, z as getElementById, c as calf, ac as querySelectorAll, t as createDocument, H as getTextTrim, X as setValue } from './calfSystem-23094c64.js';

function notGoldUpgradesPage() {
  return window.location.search.indexOf('cmd=points&type=1') === -1;
}

const goldUpgradeMsg = `<li class="notification"><a href="${pointsUrl}&type=1"><span`
+ ' class="notification-icon"></span><p class="notification-content">Up'
+ 'grade stamina with gold</p></a></li>';

function displayUpgradeMsg() {
  if (notGoldUpgradesPage()) {
    insertHtmlAfterBegin(getElementById('notifications'), goldUpgradeMsg);
  }
}

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
    setValue('lastUpgradeCheck',
      Date.parse(`${getTextTrim(limit.nextElementSibling)} GMT`));
  }
}

function parseGoldUpgrades(data) {
  if (!calf.enableUpgradeAlert) { return; }
  const doc = findDoc(data);
  const tables = querySelectorAll('#pCC > table', doc);
  if (tables.length > 0) {
    const limit = tables[tables.length - 1].rows[3].cells[2];
    checkUpgrade(limit);
  }
}

export { displayUpgradeMsg as d, notGoldUpgradesPage as n, parseGoldUpgrades as p };
//# sourceMappingURL=parseGoldUpgrades-92988039.js.map
