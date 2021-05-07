import { c as csvSplit } from './csvSplit-4a4cc559.js';
import { I as getValue } from './calfSystem-476ab75d.js';

function shouldBeArray(pref) {
  const stored = getValue(pref);
  if (stored) { return csvSplit(stored); }
  return [];
}

export { shouldBeArray as s };
//# sourceMappingURL=shouldBeArray-0b8365a6.js.map
