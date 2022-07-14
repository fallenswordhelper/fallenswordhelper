import entries from '../../../common/entries';
import { getOptions } from '../options';
import setChecks from '../setChecks';

function gearOnly(pair) { return Number(pair[0]) >= 100; }

function hydrate(acc, curr) {
  // eslint-disable-next-line prefer-destructuring
  acc[curr[0]] = curr[1];
  return acc;
}

function clearGearOnly(checkedElements) {
  return entries(checkedElements).filter(gearOnly).reduce(hydrate, {});
}

export default function clearChecks(fshInv) { // jQuery
  getOptions().checkedElements = clearGearOnly(getOptions().checkedElements);
  setChecks();
  $(fshInv).DataTable().draw();
}
