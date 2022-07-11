import formatLocalDateTime from '../../common/formatLocalDateTime';
import getStamAsString from '../../common/getStamAsString';
import partial from '../../common/partial';
import { fshBuffLog } from '../../support/constants';
import getValue from '../../system/getValue';
import { get, set } from '../../system/idb';
import buffReportParser from './buffReportParser';

const success = (e) => ` ${e[0]} (${getStamAsString(e[1])} stamina)<br>`;
const reject = (e) => ` <span class="fshRed">${e[0]}</span><br>`;

function logFormat(timeStamp, el) {
  let result = reject(el);
  if (el[1]) result = success(el);
  return timeStamp + result;
}

function buffResult(buffLog) {
  const timeStamp = formatLocalDateTime(new Date());
  const buffsAttempted = buffReportParser(document)
    .map(partial(logFormat, timeStamp));
  set(fshBuffLog, buffsAttempted.reverse().join('') + buffLog);
}

export default function updateBuffLog() {
  if (!getValue('keepBuffLog')) { return; }
  get(fshBuffLog).then(buffResult);
}
