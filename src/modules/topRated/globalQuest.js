import allowBack from './allowBack';
import { dataRows } from '../common/dataRows';
import { def_table } from '../support/constants';
import getElementsByTagName from '../common/getElementsByTagName';
import getText from '../common/getText';
import { pCC } from '../support/layout';
import searchPlayerHref from '../common/searchPlayerHref';

function playerLink(el) {
  const aCell = el.cells[1];
  aCell.innerHTML = searchPlayerHref(getText(aCell));
}

export default function globalQuest() {
  const topTable = getElementsByTagName(def_table, pCC)[3];
  allowBack(topTable);
  dataRows(topTable.rows, 4, 1).forEach(playerLink);
}
