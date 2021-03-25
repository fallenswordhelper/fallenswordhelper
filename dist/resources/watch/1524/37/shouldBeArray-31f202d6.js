import { c as csvSplit } from './csvSplit-0c234404.js';
import { I as getValue } from './calfSystem-6840a38e.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-31f202d6.js.map
