import indexAjaxDoc from '../ajax/indexAjaxDoc';
import appSe from '../app/superelite';
import dataRows from '../common/dataRows';
import dateUtc from '../common/dateUtc';
import getTextTrim from '../common/getTextTrim';
import querySelector from '../common/querySelector';
import { now, nowSecs } from '../support/now';
import $dataAccess from './$dataAccess';

function convertDate(textDate) {
  const dateAry = textDate.replace('<br>', ' ').split(/[: /]/);
  return dateUtc([dateAry[2], dateAry[1], dateAry[0], dateAry[3], dateAry[4]]);
}

function parseDateAsOffset(textDate) {
  return Math.floor((now() - convertDate(textDate)) / 1000);
}

function formatRow(row) {
  return {
    time: parseDateAsOffset(row.cells[0].innerHTML),
    creature: { name: getTextTrim(row.cells[1]) },
  };
}

function parseReport(doc) {
  if (!doc) return { s: false };
  const logTable = querySelector('#pCC table table', doc);
  if (!logTable) {
    return { s: false };
  }
  const rows = dataRows(logTable, 4, 1);
  const data = rows.map(formatRow);
  return { r: data, s: true, t: `0 ${String(nowSecs())}` };
}

// Incomplete
async function superelite() {
  return parseReport(await indexAjaxDoc({ cmd: 'superelite' }));
}

export default function daSuperElite() {
  return $dataAccess(appSe, superelite);
}
