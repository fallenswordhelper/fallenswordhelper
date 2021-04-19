import { i as isDate, f as formatDateTime } from './isDate-cef09439.js';
import { p as padZ } from './padZ-5c8671fc.js';

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

function formatLocalDateTime(aDate) {
  if (isDate(aDate)) {
    return formatDateTime(localDateParts(aDate));
  }
}

export { formatLocalDateTime as f };
//# sourceMappingURL=formatLocalDateTime-2385e9c5.js.map
