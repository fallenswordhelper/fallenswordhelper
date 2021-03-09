import { E as querySelectorArray, B as getText, s as partial, i as insertElement, z as setText, k as on, y as getElementById, A as setInnerHtml, a7 as server, a8 as cmdUrl, W as setValue, S as getUrlParameter } from './calfSystem-d1de1997.js';
import { p as parseGoldUpgrades } from './parseGoldUpgrades-10a25e83.js';
import { c as createSpan } from './createSpan-630374f0.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-8fbb3463.js';
import { i as intValue } from './intValue-d2a6f461.js';
import { n as numberIsNaN } from './numberIsNaN-738f2a3f.js';

let upgrades;
let currentFSP;
const warehouse = {};

function includesText(text, el) {
  return getText(el).includes(text);
}

function findText(text) {
  return upgrades.find(partial(includesText, text));
}

function getInputCell(label) {
  return findText(label).nextElementSibling.nextElementSibling
    .nextElementSibling;
}

function getInputElement(el) {
  return el.nextElementSibling.nextElementSibling
    .nextElementSibling.children[0].rows[0].cells[0].children[0];
}

function getRe(type, label) {
  if (label === 'amount') {
    return new RegExp(`\\+(\\d+) ${type}`);
  }
  return /(\d+)\xA0/;
}

function getValue(type, element, label) {
  if (!warehouse[type][label]) {
    const valRe = getRe(type, label);
    const value = getText(element).match(valRe)[1];
    warehouse[type][label] = value;
  }
  return warehouse[type][label];
}

function getAmount(type, upgrade) {
  return getValue(type, upgrade, 'amount');
}

function getCost(type, upgrade) {
  return getValue(type, upgrade.nextElementSibling, 'cost');
}

function getCell(type, upgrade) {
  if (!warehouse[type]) { warehouse[type] = {}; }
  if (!warehouse[type].span) {
    const span = createSpan();
    insertTextBeforeEnd(upgrade, ' ');
    insertElement(upgrade, span);
    warehouse[type].span = span;
  }
  return warehouse[type].span;
}

function doStamCount(type, upgrade, quantity, cell) {
  const amount = getAmount(type, upgrade);
  const cost = getCost(type, upgrade);
  // cap the value if the user goes over his current FSP
  let extraStam;
  if (quantity * cost <= currentFSP) {
    extraStam = quantity * amount;
    // eslint-disable-next-line no-param-reassign
    cell.className = 'fshBlue';
  } else {
    extraStam = Math.floor(currentFSP / cost) * amount;
    // eslint-disable-next-line no-param-reassign
    cell.className = 'fshRed';
  }
  setText(`(+${extraStam} stamina)`, cell);
}

function updateStamCount(type, upgrade, evt) {
  const { target } = evt;
  const quantity = Number(target.value);
  const cell = getCell(type, upgrade);
  if (numberIsNaN(quantity) || quantity === 0) {
    cell.className = 'fshHide';
    return;
  }
  doStamCount(type, upgrade, quantity, cell);
}

function injectUpgradeHelper(type) {
  const upgrade = findText(type);
  on(getInputElement(upgrade), 'keyup',
    partial(updateStamCount, type, upgrade));
}

function injectPoints() {
  currentFSP = intValue(getText(getElementById('statbar-fsp')));
  injectUpgradeHelper('Current');
  injectUpgradeHelper('Maximum');
  setInnerHtml(`<a href="${server}${
    cmdUrl}marketplace">Sell at Marketplace</a>`, getInputCell('Gold'));
}

function saveUpgradeValue(upgrade, key) {
  const text = findText(upgrade);
  const ratio = text.nextElementSibling.nextElementSibling;
  if (ratio) {
    const valueRE = /(\d+) \/ 115/;
    const value = Number(valueRE.exec(ratio.innerHTML)[1]);
    setValue(key, value + 5);
  }
}

function storePlayerUpgrades() {
  upgrades = querySelectorArray('#pCC > table:last-of-type > tbody > '
    + 'tr:nth-child(even) > td:first-child');
  saveUpgradeValue('+1 Max Allies', 'alliestotal');
  saveUpgradeValue('+1 Max Enemies', 'enemiestotal');
  injectPoints();
}

function points() {
  if (getUrlParameter('type') === '1') {
    parseGoldUpgrades();
  } else {
    storePlayerUpgrades();
  }
}

export default points;
//# sourceMappingURL=points-f4ca0576.js.map
