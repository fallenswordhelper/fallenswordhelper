import { U as nowSecs } from './calfSystem-d1de1997.js';
import { o as outputFormat } from './outputFormat-6a56d067.js';
import { s as splitTime } from './splitTime-bdf0bea9.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-38ee5f7e.js.map
