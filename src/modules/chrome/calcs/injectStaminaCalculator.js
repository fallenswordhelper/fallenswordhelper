import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import valueText from '../../common/valueText';
import intValue from '../../system/intValue';
import asInt from './asInt';
import timeBox from './timeBox';

const getStamVals = (m) => valueText(getElementsByClassName('stat-name', m)).split(' / ');

function maxStamAt(nextGain, stamVals) {
  return `<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${
    timeBox(
      valueText(nextGain),
      // get the max hours to still be inside stamina maximum
      Math.floor(
        (intValue(stamVals[1]) - intValue(stamVals[0]))
        / asInt('stat-stamina-gainPerHour'),
      ),
    )}`;
}

export default function injectStaminaCalculator() {
  const nextGain = getElementsByClassName('stat-stamina-nextGain');
  if (nextGain.length === 0) { return; }
  const staminaMouseover = getElementById('statbar-stamina-tooltip-stamina');
  const stamVals = getStamVals(staminaMouseover);
  if (stamVals.length === 2) {
    insertHtmlBeforeEnd(staminaMouseover, maxStamAt(nextGain, stamVals));
  }
}
