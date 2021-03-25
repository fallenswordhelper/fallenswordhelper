import { V as nowSecs } from './calfSystem-6840a38e.js';
import { o as outputFormat } from './outputFormat-4106761e.js';
import { s as splitTime } from './splitTime-73113d95.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-5cdc22df.js.map
