import { c as csvSplit } from './csvSplit-d22d07ed.js';
import { I as getValue } from './calfSystem-23094c64.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-da7e3d1b.js.map
