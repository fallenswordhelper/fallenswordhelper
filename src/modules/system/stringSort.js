import alpha from '../common/alpha';
import calf from '../support/calf';
import path from './path';
import sortDesc from './sortDesc';

export default function stringSort(aa, bb) {
  const a = path(aa, calf.sortBy, 'a'); // skipcq: JS-C1002
  const b = path(bb, calf.sortBy, 'a'); // skipcq: JS-C1002
  return sortDesc(alpha(a, b));
}
