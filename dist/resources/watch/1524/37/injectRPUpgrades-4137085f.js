import { y as jQueryNotPresent, f as insertHtmlBeforeEnd, p as pCC, m as getArrayByTagName, s as partial } from './calfSystem-6840a38e.js';
import { m as myStats } from './myStats-015eee2e.js';
import { r as reduceBuffArray } from './reduceBuffArray-87d130c4.js';
import './getProfile-cb4d581c.js';
import './cmdExport-31c126b7.js';
import './indexAjaxJson-dfd6ce16.js';
import './playerName-2d72a4c8.js';
import './idb-e00287d8.js';

const packRE = />\s*([ a-zA-Z]+) Level (\d+)/g;

const makeSpan = (bf) => `<br><span class="fshRed fshNoWrap">${bf[1]} ${
  bf[2]} active</span>`;

function checkForBuffs(myBuffs, el) {
  const { tipped } = el.dataset;
  const dupeBuffs = [...tipped.matchAll(packRE)]
    .filter((bf) => myBuffs[bf[1]] === Number(bf[2]));
  if (dupeBuffs.length > 0) {
    insertHtmlBeforeEnd(el.parentNode, dupeBuffs.map(makeSpan).join(''));
  }
}

function postWarnings(myBuffs) {
  const packsRow = pCC.children[0].rows[9];
  if (!packsRow) { return; }
  getArrayByTagName('a', packsRow.cells[0].children[0])
    .forEach(partial(checkForBuffs, myBuffs));
}

function parseProfile(data) {
  if (data._skills.length !== 0) {
    const myBuffs = reduceBuffArray(data._skills);
    postWarnings(myBuffs);
  }
}

function injectRPUpgrades() { // jQuery.min
  if (jQueryNotPresent()) { return; }
  myStats(true).then(parseProfile);
}

export default injectRPUpgrades;
//# sourceMappingURL=injectRPUpgrades-4137085f.js.map
