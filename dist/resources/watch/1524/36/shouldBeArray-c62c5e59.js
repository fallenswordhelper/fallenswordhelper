import { c as csvSplit } from './csvSplit-482f2ccd.js';
import { I as getValue } from './calfSystem-c08399e5.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-c62c5e59.js.map
