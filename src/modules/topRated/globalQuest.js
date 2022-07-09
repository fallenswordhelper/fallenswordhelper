import dataRows from '../common/dataRows';
import { defTable } from '../support/constants';
import formToUrl from '../common/formToUrl';
import getElementsByTagName from '../common/getElementsByTagName';
import { getPcc } from '../support/layout';
import getText from '../common/getText';
import on from '../common/on';
import searchPlayerHref from '../common/searchPlayerHref';
import setInnerHtml from '../dom/setInnerHtml';

function globalQuestAllowBack(topTable) { // jQuery
  const [thisSelect] = getElementsByTagName('select', topTable);
  $(thisSelect).off();
  on(getPcc(), 'change', (e) => formToUrl({ target: e.target.form }));
}

function playerLink(el) {
  const [, aCell] = el.cells;
  setInnerHtml(searchPlayerHref(getText(aCell)), aCell);
}

export default function globalQuest() {
  const [, , , topTable] = getElementsByTagName(defTable, getPcc());
  globalQuestAllowBack(topTable);
  dataRows(topTable, 4, 1).forEach(playerLink);
}
