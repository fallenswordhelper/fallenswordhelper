import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import valueText from '../../common/valueText';
import { defStatbarLevel } from '../../support/constants';
import getValue from '../../system/getValue';
import asInt from './asInt';
import hoursAfterNextGain from './hoursAfterNextGain';
import timeBox from './timeBox';

export default function injectLevelupCalculator() {
  if (!getValue('levelUpCalculator')) return;
  const nextGain = getElementsByClassName('stat-xp-nextGain');
  if (nextGain.length === 0) return;
  insertHtmlBeforeEnd(
    getElementById(defStatbarLevel),
    timeBox(
      'stat-xp-nextLevel',
      'Next Level At',
      valueText(nextGain),
      hoursAfterNextGain(
        asInt('stat-xp-remaining'),
        asInt('stat-xp-gainPerHour'),
      ),
    ),
  );
}
