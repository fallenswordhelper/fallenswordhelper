import { t as timeBox, a as asInt } from './timeBox-ea1984f0.js';
import { K as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, bW as defStatbarLevel } from './calfSystem-d5c49dc8.js';
import { v as valueText } from './valueText-8cb2a936.js';
import './intValue-f6303c59.js';
import './padZ-5c8671fc.js';

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
//# sourceMappingURL=injectLevelupCalculator-f45eb581.js.map
