import { V as nowSecs } from './calfSystem-86663d02.js';
import { o as outputFormat } from './outputFormat-64398632.js';
import { s as splitTime } from './splitTime-348bc287.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-8ea1567f.js.map
