import { getNowSecs } from '../support/now';
import partial from './partial';

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
      return Math.floor((getNowSecs() - obj.last_login) / 60);
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

export default function lastActivityMins(obj) {
  return getMins.reduce(partial(sum, obj), 0);
}
