import { c as csvSplit } from './csvSplit-5e072bd9.js';
import { H as getValue } from './calfSystem-d1de1997.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-636558da.js.map
