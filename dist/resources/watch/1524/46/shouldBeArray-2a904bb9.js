import { c as csvSplit } from './csvSplit-d0e27857.js';
import { I as getValue } from './calfSystem-86663d02.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-2a904bb9.js.map
