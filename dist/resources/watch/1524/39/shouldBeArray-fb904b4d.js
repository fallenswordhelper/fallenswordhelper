import { c as csvSplit } from './csvSplit-ec367ad9.js';
import { I as getValue } from './calfSystem-d5c49dc8.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-fb904b4d.js.map
