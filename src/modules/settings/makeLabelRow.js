import makeCell from './makeCell';
import makeLabelCell from './makeLabelCell';

export default function makeLabelRow(left, right) {
  return `<tr>${makeLabelCell(left)}${makeCell(right)}</tr>`;
}
