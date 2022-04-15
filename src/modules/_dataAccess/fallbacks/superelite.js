import createDocument from '../../system/createDocument';
import dataRows from '../../common/dataRows';
import getTextTrim from '../../common/getTextTrim';
import indexAjaxData from '../../ajax/indexAjaxData';
import { months } from '../../support/constants';
import querySelector from '../../common/querySelector';
import { now, nowSecs } from '../../support/now';

function parseDateAsOffset(textDate) {
  const dateAry = textDate.replace('<br>', ' ').split(/[: /]/);
  return Math.floor(
    (now - Date.UTC(
      Number(dateAry[2]),
      months.indexOf(dateAry[1]),
      Number(dateAry[0]),
      Number(dateAry[3]),
      Number(dateAry[4]),
      0,
    )) / 1000,
  );
}

function formatRow(row) {
  return {
    time: parseDateAsOffset(row.cells[0].innerHTML),
    creature: { name: getTextTrim(row.cells[1]) },
  };
}

function parseReport(html) {
  const doc = createDocument(html);
  const logTable = querySelector('#pCC table table', doc);
  if (!logTable) { return { s: false }; }
  const rows = dataRows(logTable, 4, 1);
  const data = rows.map(formatRow);
  return { r: data, s: true, t: `0 ${String(nowSecs)}` };
}

// Incomplete
export default function superelite() {
  return indexAjaxData({ cmd: 'superelite' }).then(parseReport);
}
