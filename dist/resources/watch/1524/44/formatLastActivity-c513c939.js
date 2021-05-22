import { V as nowSecs } from './calfSystem-23094c64.js';
import { o as outputFormat } from './outputFormat-3fd3b6de.js';
import { s as splitTime } from './splitTime-7020b1d8.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-c513c939.js.map
