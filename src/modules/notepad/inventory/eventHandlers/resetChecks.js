import { defaultOptions } from '../assets';
import { getOptions } from '../options';
import setChecks from '../setChecks';

export default function resetChecks(fshInv) { // jQuery
  getOptions().checkedElements = defaultOptions.checkedElements;
  setChecks();
  $(fshInv).DataTable().draw(false);
}
