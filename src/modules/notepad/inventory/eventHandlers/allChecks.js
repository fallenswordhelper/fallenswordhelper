import { inventoryCheckAll } from '../assets';
import { getOptions } from '../options';
import setChecks from '../setChecks';
import { headerEvent } from './telemetry';

export default function allChecks(fshInv) {
  // jQuery
  headerEvent('Select All');
  getOptions().checkedElements = inventoryCheckAll;
  setChecks();
  $(fshInv).DataTable().draw(false);
}
