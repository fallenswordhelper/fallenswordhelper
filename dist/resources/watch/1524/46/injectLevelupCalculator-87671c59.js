import { a as asInt } from './asInt-e8fa21e2.js';
import { M as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, bY as defStatbarLevel } from './calfSystem-86663d02.js';
import { t as timeBox } from './timeBox-1a540765.js';
import { v as valueText } from './valueText-d8194e49.js';
import './intValue-19726e4b.js';
import './padZ-aa6c487e.js';

function injectLevelupCalculator() {
  const nextGain = getElementsByClassName('stat-xp-nextGain');
  if (nextGain.length === 0) { return; }
  insertHtmlBeforeEnd(getElementById(defStatbarLevel),
    `<dt class="stat-xp-nextLevel">Next Level At</dt>${
      timeBox(
        valueText(nextGain),
        Math.ceil(asInt('stat-xp-remaining') / asInt('stat-xp-gainPerHour')),
      )}`);
}

export default injectLevelupCalculator;
//# sourceMappingURL=injectLevelupCalculator-87671c59.js.map
