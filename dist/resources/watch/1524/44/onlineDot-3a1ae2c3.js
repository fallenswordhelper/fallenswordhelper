import { V as nowSecs, s as partial } from './calfSystem-23094c64.js';

const getMins = [
  (obj, min) => {
    if (obj.day) { return min + parseInt(obj.day, 10) * 1440; }
    return min;
  },
  (obj, min) => {
    if (obj.hour) { return min + parseInt(obj.hour, 10) * 60; }
    return min;
  },
  (obj, min) => {
    if (obj.min) { return min + parseInt(obj.min, 10); }
    return min;
  },
  (obj, min) => {
    if (obj.last_login) {
      return Math.floor((nowSecs - obj.last_login) / 60);
    }
    return min;
  },
  (obj, min) => {
    // last_login is 'false' over 30 days
    if ('last_login' in obj && !obj.last_login) { return 99999; }
    return min;
  },
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

function onlineDot(obj) {
  const min = lastActivityMins(obj);
  const which = getDot.find(partial(activity, min));
  if (which) { return aDot(which[1]); }
  return aDot('redDot');
}

export { lastActivityMins as l, onlineDot as o };
//# sourceMappingURL=onlineDot-3a1ae2c3.js.map
