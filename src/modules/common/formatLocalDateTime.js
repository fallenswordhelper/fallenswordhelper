import padZ from '../system/padZ';
import formatDateTime from './formatDateTime';
import isDate from './isDate';

function localDatePartsPadded(aDate) {
  return [
    aDate.getMonth() + 1,
    aDate.getDate(),
    aDate.getHours(),
    aDate.getMinutes(),
    aDate.getSeconds(),
  ].map(padZ);
}

function localDateParts(aDate) {
  return [aDate.getFullYear().toString()].concat(localDatePartsPadded(aDate));
}

export default function formatLocalDateTime(aDate) {
  if (isDate(aDate)) {
    return formatDateTime(localDateParts(aDate));
  }
}
