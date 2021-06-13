import { C as getText, H as getTextTrim, s as partial, ag as arrayFrom, b as createDiv, f as insertHtmlBeforeEnd, m as getArrayByTagName, aH as contains } from './calfSystem-86663d02.js';
import { c as closestTable } from './closestTable-dcef30f0.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-49b00a11.js';
import './closest-d38ca7fc.js';

function cellOneHazText(curr) {
  return curr.cells[1] && getText(curr.cells[1]);
}

function reduceStatTable(acc, curr, index) {
  const key = getTextTrim(curr.cells[0]).replace(':', '');
  if (!key) { return acc; }
  acc[key] = { ind: index };
  if (cellOneHazText(curr)) {
    acc[key].value = Number(getTextTrim(curr.cells[1]).replace('+', ''));
  }
  return acc;
}

function getVal(prop, obj) {
  if (obj[prop] && obj[prop].value) {
    return obj[prop].value;
  }
  return 0;
}

function getLastIndex(obj, tbl) {
  if (obj.Enhancements) {
    return tbl.rows[obj.Enhancements.ind - 1];
  }
  return tbl.rows[tbl.rows.length - 1];
}

function sum(statObj, acc, curr) { return acc + getVal(curr, statObj); }

function calcTotalStats(statObj) {
  return ['Attack', 'Defense', 'Armor', 'Damage', 'HP']
    .reduce(partial(sum, statObj), 0);
}

function addStats(el) {
  const statTable = closestTable(el);
  const statObj = arrayFrom(statTable.rows).reduce(reduceStatTable, {});
  const totalStats = calcTotalStats(statObj);
  insertHtmlBeforeBegin(getLastIndex(statObj, statTable),
    `<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${
      totalStats}&nbsp;</td></tr>`);
}

function fshDataFilter(data) {
  const container = createDiv();
  insertHtmlBeforeEnd(container, data);
  getArrayByTagName('font', container).filter(contains('Bonuses'))
    .forEach(addStats);
  return container.innerHTML;
}

function fshPreFilter(options) {
  if (options.url.startsWith('fetchitem')) {
    // eslint-disable-next-line no-param-reassign
    options.dataFilter = fshDataFilter;
  }
}

function addStatTotalToMouseover() { // jQuery
  $.ajaxPrefilter(fshPreFilter);
}

export default addStatTotalToMouseover;
//# sourceMappingURL=addStatTotalToMouseover-1ee99201.js.map
