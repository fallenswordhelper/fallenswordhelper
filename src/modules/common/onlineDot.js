import lastActivityMins from './lastActivityMins';
import partial from './partial';

const getDot = [
  [2, 'greenDiamond'],
  [5, 'yellowDiamond'],
  [30, 'orangeDiamond'],
  [10080, 'offlineDot'],
  [44640, 'sevenDayDot'],
];

function activity(min, el) { return min < el[0]; }

function aDot(type) {
  let tip = 'Offline';
  if (type === 'greenDiamond') { tip = 'Online'; }
  return `<span class="fshDot ${type
  }" data-tooltip="${tip}"></span>`;
}

export default function onlineDot(obj) {
  const min = lastActivityMins(obj);
  const which = getDot.find(partial(activity, min));
  if (which) { return aDot(which[1]); }
  return aDot('redDot');
}
