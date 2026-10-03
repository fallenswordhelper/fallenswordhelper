import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import valueText from '../../common/valueText';
import getValue from '../../system/getValue';
import intValue from '../../system/intValue';
import asInt from './asInt';
import hoursAfterNextGain from './hoursAfterNextGain';
import timeBox from './timeBox';

const getStamVals = (m) =>
  valueText(getElementsByClassName('stat-name', m)).split(' / ');

const dtClass = 'stat-stamina-nextHuntTime';
const label = 'Max Stam At';

function maxStamAt(nextGain, stamVals) {
  const remaining = intValue(stamVals[1]) - intValue(stamVals[0]);
  if (remaining <= 0) return `<dt class="${dtClass}">${label}</dt><dd>Now</dd>`;
  return timeBox(
    dtClass,
    label,
    valueText(nextGain),
    hoursAfterNextGain(remaining, asInt('stat-stamina-gainPerHour')),
  );
}

export default function injectStaminaCalculator() {
  if (!getValue('staminaCalculator')) return;
  const nextGain = getElementsByClassName('stat-stamina-nextGain');
  if (nextGain.length === 0) return;
  const staminaMouseover = getElementById('statbar-stamina-tooltip-stamina');
  const stamVals = getStamVals(staminaMouseover);
  if (stamVals.length === 2) {
    insertHtmlBeforeEnd(staminaMouseover, maxStamAt(nextGain, stamVals));
  }
}
