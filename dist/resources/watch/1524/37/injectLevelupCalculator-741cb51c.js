import { t as timeBox, a as asInt } from './timeBox-50174dcc.js';
import { K as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, bW as defStatbarLevel } from './calfSystem-6840a38e.js';
import { v as valueText } from './valueText-6241396f.js';
import './intValue-0e97c9b9.js';
import './padZ-c46e4c30.js';

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
//# sourceMappingURL=injectLevelupCalculator-741cb51c.js.map
