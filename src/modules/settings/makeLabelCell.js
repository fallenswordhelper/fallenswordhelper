import makeLeftCell from './makeLeftCell';
import { justLabel } from './simpleCheckbox';

export default function makeLabelCell(pref) {
  return makeLeftCell(justLabel(pref));
}
