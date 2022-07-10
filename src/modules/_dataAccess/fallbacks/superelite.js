import createDocument from '../../system/createDocument';
import dataRows from '../../common/dataRows';
import getTextTrim from '../../common/getTextTrim';
import indexAjaxData from '../../ajax/indexAjaxData';
import { months } from '../../support/constants';
import querySelector from '../../common/querySelector';
import { getNow, getNowSecs } from '../../support/now';

function convertDate(textDate) {
  const dateAry = textDate.replace('<br>', ' ').split(/[: /]/);
  return Date.UTC(
    Number(dateAry[2]),
    months.indexOf(dateAry[1]),
    Number(dateAry[0]),
    Number(dateAry[3]),
    Number(dateAry[4]),
    0,
  );
}

function parseDateAsOffset(textDate) {
  return Math.floor((getNow() - convertDate(textDate)) / 1000);
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
  return { r: data, s: true, t: `0 ${String(getNowSecs())}` };
}

// Incomplete
export default function superelite() {
  return indexAjaxData({ cmd: 'superelite' }).then(parseReport);
}
