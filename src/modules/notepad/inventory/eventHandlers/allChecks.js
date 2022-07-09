import { getOptions } from '../options';
import { inventoryCheckAll } from '../assets';
import setChecks from '../setChecks';

export default function allChecks(fshInv) { // jQuery
  getOptions().checkedElements = inventoryCheckAll;
  setChecks();
  $(fshInv).DataTable().draw(false);
}
