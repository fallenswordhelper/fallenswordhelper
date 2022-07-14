import querySelectorArray from '../../../common/querySelectorArray';
import { getOptions } from '../options';
import saveOptions from '../saveOptions';

export default function getChecks(fshInv) { // jQuery
  getOptions().checkedElements = {};
  querySelectorArray('table.fshInvFilter input[type="checkbox"][item]:checked')
    .forEach(
      (el) => { getOptions().checkedElements[el.getAttribute('item')] = 1; },
    );
  saveOptions(getOptions());
  $(fshInv).DataTable().draw(false);
}
