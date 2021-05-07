import { d as dataRows } from './dataRows-af1deb3a.js';
import { g as getElementsByTagName, p as pCC, d as defTable, k as on, B as setInnerHtml, C as getText } from './calfSystem-476ab75d.js';
import { f as formToUrl } from './formToUrl-3223a0cf.js';
import { s as searchPlayerHref } from './searchPlayerHref-1a09ee81.js';

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
//# sourceMappingURL=globalQuest-908d7121.js.map
