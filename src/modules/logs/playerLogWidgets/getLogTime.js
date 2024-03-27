import getTextTrim from '../../common/getTextTrim';
import parseDateAsTimestamp from '../../system/parseDateAsTimestamp';

export default function getLogTime(row) {
  return parseDateAsTimestamp(getTextTrim(row.cells[1])) / 1000;
}
