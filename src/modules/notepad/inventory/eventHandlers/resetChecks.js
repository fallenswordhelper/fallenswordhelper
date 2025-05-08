import { defaultOptions } from '../assets';
import { getOptions } from '../options';
import setChecks from '../setChecks';
import { headerEvent } from './telemetry';

export default function resetChecks(fshInv) { // jQuery
  headerEvent('Defaults');
  getOptions().checkedElements = defaultOptions.checkedElements;
  setChecks();
  $(fshInv).DataTable().draw(false);
}
