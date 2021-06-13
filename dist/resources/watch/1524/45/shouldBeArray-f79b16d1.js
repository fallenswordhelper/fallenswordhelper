import { c as csvSplit } from './csvSplit-95ff5434.js';
import { I as getValue } from './calfSystem-02fd040d.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-f79b16d1.js.map
