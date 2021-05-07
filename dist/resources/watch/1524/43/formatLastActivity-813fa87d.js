import { W as nowSecs } from './calfSystem-476ab75d.js';
import { o as outputFormat } from './outputFormat-c52c3250.js';
import { s as splitTime } from './splitTime-8bebeac4.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-813fa87d.js.map
