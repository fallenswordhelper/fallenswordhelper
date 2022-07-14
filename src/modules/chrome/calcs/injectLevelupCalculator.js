import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import valueText from '../../common/valueText';
import { defStatbarLevel } from '../../support/constants';
import asInt from './asInt';
import timeBox from './timeBox';

export default function injectLevelupCalculator() {
  const nextGain = getElementsByClassName('stat-xp-nextGain');
  if (nextGain.length === 0) { return; }
  insertHtmlBeforeEnd(
    getElementById(defStatbarLevel),
    `<dt class="stat-xp-nextLevel">Next Level At</dt>${
      timeBox(
        valueText(nextGain),
        Math.ceil(asInt('stat-xp-remaining') / asInt('stat-xp-gainPerHour')),
      )}`,
  );
}
