import createSpan from './common/cElement/createSpan';
import getElementById from './common/getElementById';
import getText from './common/getText';
import insertElement from './common/insertElement';
import insertTextBeforeEnd from './common/insertTextBeforeEnd';
import numberIsNaN from './common/numberIsNaN';
import on from './common/on';
import partial from './common/partial';
import querySelectorArray from './common/querySelectorArray';
import regExpFirstCapture from './common/regExpFirstCapture';
import setInnerHtml from './dom/setInnerHtml';
import setText from './dom/setText';
import { cmdUrl } from './support/constants';
import intValue from './system/intValue';
import setValue from './system/setValue';
import { server } from './system/system';

let playerUpgrades = 0;
let currentFSP = 0;
const warehouse = {};

function includesText(text, el) {
  return getText(el).includes(text);
}

function findText(text) {
  return playerUpgrades.find(partial(includesText, text));
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
  return /(?<cost>\d{1,3})\xA0/u;
}

function getValue(type, element, label) {
  if (!warehouse[type][label]) {
    const valRe = getRe(type, label);
    const value = regExpFirstCapture(valRe, getText(element));
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
  let extraStam = Math.floor(currentFSP / cost) * amount;
  if (quantity * cost <= currentFSP) {
    extraStam = quantity * amount;
    // eslint-disable-next-line no-param-reassign
    cell.className = 'fshBlue';
  } else {
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
  on(getInputElement(upgrade), 'keyup', partial(updateStamCount, type, upgrade));
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
    const valueRE = /(?<value>\d{1,3}) \/ 115/;
    const value = Number(regExpFirstCapture(valueRE, ratio.innerHTML));
    setValue(key, value + 5);
  }
}

export default function upgrades() {
  playerUpgrades = querySelectorArray('#pCC > table:last-of-type > tbody > '
    + 'tr:nth-child(even) > td:first-child');
  saveUpgradeValue('+1 Max Allies', 'alliestotal');
  saveUpgradeValue('+1 Max Enemies', 'enemiestotal');
  injectPoints();
}
