import { c as csvSplit } from './csvSplit-d4535156.js';
import { H as getValue } from './calfSystem-cc2b30b5.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-4c618bea.js.map
