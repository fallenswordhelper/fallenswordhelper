import { y as jQueryNotPresent, f as insertHtmlBeforeEnd, p as pCC, m as getArrayByTagName, s as partial } from './calfSystem-476ab75d.js';
import { m as myStats } from './myStats-e7d202ce.js';
import { r as reduceBuffArray } from './reduceBuffArray-d0911495.js';
import './getProfile-b8ff6670.js';
import './cmdExport-5254d9ed.js';
import './indexAjaxJson-2772144f.js';
import './playerName-f6639bfd.js';
import './idb-07a4f1ba.js';

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
//# sourceMappingURL=injectRPUpgrades-ab342d7d.js.map
