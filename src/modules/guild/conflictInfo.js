import conflicts from '../ajax/conflicts';
import sendEvent from '../analytics/sendEvent';
import dataRows from '../common/dataRows';
import onclick from '../common/onclick';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import setInnerHtml from '../dom/setInnerHtml';
import { guildSubcmdUrl } from '../support/constants';
import createDocument from '../system/createDocument';

function makeCell(newRow, html) {
  setInnerHtml(html, newRow.insertCell(-1));
}

function buildRow(insertHere, html1, html2) {
  const newRow = insertHere.insertRow(insertHere.rows.length - 2);
  makeCell(newRow, html1);
  makeCell(newRow, html2);
  return newRow;
}

function conflictHeader(insertHere) {
  const hRow = buildRow(
    insertHere,
    `<a href="${guildSubcmdUrl}conflicts">Active Conflicts</a>`,
    'Score',
  );
  onclick(hRow, (e) => {
    if (e.target.tagName === 'A') sendEvent('guildManage', 'conflictHeader');
  });
}

function conflictRow(insertHere, aRow) {
  buildRow(
    insertHere,
    aRow.cells[0].innerHTML,
    `<b>${aRow.cells[6].innerHTML}</b>`,
  );
}

function hazConflict(conflictTable, curPage, insertHere) {
  // Legacy
  if (curPage === 1) {
    conflictHeader(insertHere);
  }
  dataRows(conflictTable, 7, 0).forEach(partial(conflictRow, insertHere));
}

function activeConflicts(doc, curPage, insertHere) {
  // Legacy
  const conflictTable = querySelector(
    '#pCC > table > tbody > tr > td > table',
    doc,
  );
  if (conflictTable && conflictTable.rows.length > 3) {
    hazConflict(conflictTable, curPage, insertHere);
  }
}

function getMaxPage(page) {
  return Number(page.nextSibling.textContent.split('\xa0')[2]);
}

async function getNextPage(curPage, fn, callback) {
  const args = await conflicts(curPage + 1);
  fn(callback, args);
}

function gotConflictInfo(callback, responseText) {
  // Legacy
  const doc = createDocument(responseText);
  const page = querySelector('#pCC input[name="page"]', doc);
  if (!page) {
    return;
  }
  const curPage = Number(page.value);
  const maxPage = getMaxPage(page);
  activeConflicts(doc, curPage, callback.node);
  if (maxPage > curPage) {
    getNextPage(curPage, gotConflictInfo, callback);
  }
}

export default async function conflictInfo(leftHandSideColumnTable) {
  const [statCtrl] = leftHandSideColumnTable.rows[6].cells[0].children;
  if (statCtrl) {
    const responseText = await conflicts(1);
    gotConflictInfo({ node: statCtrl }, responseText);
  }
}
