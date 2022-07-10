import padZ from '../system/padZ';
import formatDateTime from './formatDateTime';
import isDate from './isDate';

function utcDatePartsPadded(aDate) {
  return [
    aDate.getUTCMonth() + 1,
    aDate.getUTCDate(),
    aDate.getUTCHours(),
    aDate.getUTCMinutes(),
    aDate.getUTCSeconds(),
  ].map(padZ);
}

function utcDateParts(aDate) {
  return [aDate.getUTCFullYear().toString()].concat(utcDatePartsPadded(aDate));
}

export default function formatUtcDateTime(aDate) {
  if (isDate(aDate)) {
    return formatDateTime(utcDateParts(aDate));
  }
}
