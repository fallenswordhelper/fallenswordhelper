import { V as nowSecs } from './calfSystem-c08399e5.js';
import { o as outputFormat } from './outputFormat-01edbae6.js';
import { s as splitTime } from './splitTime-cd640f88.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-21effb95.js.map
