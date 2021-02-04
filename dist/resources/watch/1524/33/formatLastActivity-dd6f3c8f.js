import { U as nowSecs } from './calfSystem-cc2b30b5.js';
import { o as outputFormat } from './outputFormat-9aaac9e6.js';
import { s as splitTime } from './splitTime-9a7b345f.js';

function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}

export { formatLastActivity as f };
//# sourceMappingURL=formatLastActivity-dd6f3c8f.js.map
