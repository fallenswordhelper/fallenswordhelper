import { a as asInt } from './asInt-6102ee12.js';
import { M as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, bY as defStatbarLevel } from './calfSystem-02fd040d.js';
import { t as timeBox } from './timeBox-49a6d53f.js';
import { v as valueText } from './valueText-1e3feaa3.js';
import './intValue-a6f9b475.js';
import './padZ-28d1918e.js';

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
//# sourceMappingURL=injectLevelupCalculator-d4129dd6.js.map
