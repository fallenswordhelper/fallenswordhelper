import querySelectorArray from '../../common/querySelectorArray';
import { getOptions } from './options';
import saveOptions from './saveOptions';

export default function setChecks() {
  querySelectorArray('table.fshInvFilter input[type="checkbox"]').forEach(
    (el) => {
      el.checked = getOptions().checkedElements[el.getAttribute('item')] === 1;
    },
  );
  saveOptions(getOptions());
}
