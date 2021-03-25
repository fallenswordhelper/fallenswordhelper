import { d as dataRows } from './dataRows-9a4dd03f.js';
import { g as getElementsByTagName, p as pCC, d as defTable, k as on, B as setInnerHtml, C as getText } from './calfSystem-6840a38e.js';
import { f as formToUrl } from './formToUrl-a4a392eb.js';
import { s as searchPlayerHref } from './searchPlayerHref-b7db911b.js';

function globalQuestAllowBack(topTable) { // jQuery
  const thisSelect = getElementsByTagName('select', topTable)[0];
  $(thisSelect).off();
  on(pCC, 'change', (e) => formToUrl(e.target.form));
}

function playerLink(el) {
  const aCell = el.cells[1];
  setInnerHtml(searchPlayerHref(getText(aCell)), aCell);
}

function globalQuest() {
  const topTable = getElementsByTagName(defTable, pCC)[3];
  globalQuestAllowBack(topTable);
  dataRows(topTable.rows, 4, 1).forEach(playerLink);
}

export default globalQuest;
//# sourceMappingURL=globalQuest-a0bcf813.js.map
