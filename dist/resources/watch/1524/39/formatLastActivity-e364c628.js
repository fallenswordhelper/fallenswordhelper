import { V as nowSecs } from './calfSystem-d5c49dc8.js';
import { o as outputFormat } from './outputFormat-d3c3754d.js';
import { s as splitTime } from './splitTime-078928e8.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-e364c628.js.map
