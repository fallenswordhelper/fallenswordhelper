import { a as asInt } from './asInt-7509a7c4.js';
import { M as getElementsByClassName, f as insertHtmlBeforeEnd, z as getElementById, bW as defStatbarLevel } from './calfSystem-476ab75d.js';
import { t as timeBox } from './timeBox-be31ef8d.js';
import { v as valueText } from './valueText-2986631a.js';
import './intValue-fefb28df.js';
import './padZ-7f619ae9.js';

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
//# sourceMappingURL=injectLevelupCalculator-ec98bcb5.js.map
