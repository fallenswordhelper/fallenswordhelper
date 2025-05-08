import splitTime from '../common/splitTime';
import { nowSecs } from '../support/now';
import outputFormat from './outputFormat';

export default function formatLastActivity(lastLogin) {
  const timeAry = splitTime(Math.abs(nowSecs() - lastLogin));
  return `${outputFormat(timeAry[0], ' days, ')
    + outputFormat(timeAry[1], ' hours, ')
    + outputFormat(timeAry[2], ' mins, ')
    + timeAry[3]} secs`;
}
