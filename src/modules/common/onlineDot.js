import { nowSecs } from '../support/now';
import partial from './partial';

const getMins = [
  (obj, min) => (obj.day ? min + parseInt(obj.day, 10) * 1440 : min),
  (obj, min) => (obj.hour ? min + parseInt(obj.hour, 10) * 60 : min),
  (obj, min) => (obj.min ? min + parseInt(obj.min, 10) : min),
  (obj, min) => (obj.last_login ? Math.floor((nowSecs() - obj.last_login) / 60) : min),
  // last_login is 'false' over 30 days
  (obj, min) => ('last_login' in obj && !obj.last_login ? 99999 : min),
];

function sum(obj, acc, curr) { return curr(obj, acc); }

function lastActivityMins(obj) {
  return getMins.reduce(partial(sum, obj), 0);
}

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
