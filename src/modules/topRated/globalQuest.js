import sendEvent from '../analytics/sendEvent';
import dataRows from '../common/dataRows';
import formToUrl from '../common/formToUrl';
import getElementsByTagName from '../common/getElementsByTagName';
import getText from '../common/getText';
import on from '../common/on';
import searchPlayerHref from '../common/searchPlayerHref';
import setInnerHtml from '../dom/setInnerHtml';
import { defTable } from '../support/constants';
import { pcc } from '../support/layout';

function changePage(e) {
  sendEvent('toprated', 'globalQuestAllowBack');
  formToUrl({ target: e.target.form });
}

function globalQuestAllowBack(topTable) {
  // jQuery
  const [thisSelect] = getElementsByTagName('select', topTable);
  $(thisSelect).off();
  on(pcc(), 'change', changePage);
}

function playerLink(el) {
  const [, aCell] = el.cells;
  setInnerHtml(searchPlayerHref(getText(aCell)), aCell);
}

export default function globalQuest() {
  if (!pcc()) return;
  const tables = getElementsByTagName(defTable, pcc());
  if (tables.length < 4) return;
  globalQuestAllowBack(tables[3]);
  dataRows(tables[3], 4, 1).forEach(playerLink);
}
