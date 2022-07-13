import makeCell from './makeCell';
import makeLeftCell from './makeLeftCell';

export default function makeCustomRow(left, right) {
  return `<tr>${makeLeftCell(left)}${makeCell(right)}</tr>`;
}
