import { V as nowSecs } from './calfSystem-02fd040d.js';
import { o as outputFormat } from './outputFormat-f49e3dd8.js';
import { s as splitTime } from './splitTime-4b99e8b3.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-489f2b09.js.map
