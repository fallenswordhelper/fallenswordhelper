import insertElement from '../../../common/insertElement';
import partial from '../../../common/partial';

function addNextCell(row, [colSpan, anElementFn, isHeader]) {
  const aCell = row.insertCell(-1);
  aCell.colSpan = colSpan;
  if (isHeader) { aCell.className = 'header'; }
  insertElement(aCell, anElementFn());
  return aCell;
}

function addRowCells(aRow, someCells) {
  someCells.forEach(partial(addNextCell, aRow));
}

function addNextRow(tbl, cells, isBlue) {
  const aRow = tbl.insertRow(-1);
  if (isBlue) { aRow.className = 'fshBlue'; }
  addRowCells(aRow, cells);
  return aRow;
}

function addRow(tbl, row) {
  addNextRow(tbl, row[0], row[1]);
}

export default function addRows(tbl, rows) {
  rows.forEach(partial(addRow, tbl));
}
