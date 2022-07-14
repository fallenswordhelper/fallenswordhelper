import { inventoryCheckAll } from '../assets';
import { getOptions } from '../options';
import setChecks from '../setChecks';

export default function allChecks(fshInv) { // jQuery
  getOptions().checkedElements = inventoryCheckAll;
  setChecks();
  $(fshInv).DataTable().draw(false);
}
