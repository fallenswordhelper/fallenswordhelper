import arrayFrom from './arrayFrom';

export default function dataRows(table, cols, skip) {
  if (table?.rows) {
    return arrayFrom(table.rows).filter((row, i) => row.children.length === cols && i > skip);
  }
}
