import { t as timeBox, a as asInt } from './timeBox-1d774b31.js';
import { J as getElementsByClassName, f as insertHtmlBeforeEnd, y as getElementById, bU as defStatbarLevel } from './calfSystem-cc2b30b5.js';
import { v as valueText } from './valueText-21f582fc.js';
import './intValue-55d66e09.js';
import './padZ-df568ed6.js';

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
//# sourceMappingURL=injectLevelupCalculator-08ddac82.js.map
