import { t as timeBox, a as asInt } from './timeBox-acfb874c.js';
import { J as getElementsByClassName, f as insertHtmlBeforeEnd, y as getElementById, bU as defStatbarLevel } from './calfSystem-d1de1997.js';
import { v as valueText } from './valueText-36756778.js';
import './intValue-d2a6f461.js';
import './padZ-d4e02992.js';

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
//# sourceMappingURL=injectLevelupCalculator-c3ce9c47.js.map
