import { t as timeBox, a as asInt } from './timeBox-7f88f717.js';
import { K as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, bW as defStatbarLevel } from './calfSystem-c08399e5.js';
import { v as valueText } from './valueText-95433860.js';
import './intValue-ca51a3c0.js';
import './padZ-0374e903.js';

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
//# sourceMappingURL=injectLevelupCalculator-8ac98be1.js.map
