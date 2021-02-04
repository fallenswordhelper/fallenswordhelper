import { M as arrayFrom, s as partial, o as onclick, aA as isFunction, a4 as fallback, W as setValue, y as getElementById, k as on } from './calfSystem-cc2b30b5.js';
import { h as hideElement } from './hideElement-eb117e0e.js';
import { t as toggleForce } from './toggleForce-6831dfcc.js';

const warehouse = [];
let prefValue;
let headerIndex;

function hideRow(el) { hideElement(el.row); }

function collapseArt(article) {
  article.rows.forEach(hideRow);
  // eslint-disable-next-line no-param-reassign
  article.open = false;
}

function needsCollapse(article) { if (article.open) { collapseArt(article); } }

function collapseAll() { warehouse.forEach(needsCollapse); }

function show(el) { toggleForce(el.row, false); }

function expandArt(article) {
  article.rows.forEach(show);
  // eslint-disable-next-line no-param-reassign
  article.open = true;
}

function needsExpand(article) { if (!article.open) { expandArt(article); } }

function expandAll() { warehouse.forEach(needsExpand); }

function isHeader(el) { if (el.rowIndex % headerIndex === 0) { return el; } }

function closestTr(el) {
  if (el.tagName === 'TR') {
    return isHeader(el);
  }
  if (el.tagName === 'TABLE') { return; }
  return closestTr(el.parentNode);
}

function evtEnabled(evt) {
  const myRow = closestTr(evt.target);
  if (!myRow) { return; }
  const articleNo = myRow.rowIndex / headerIndex;
  const article = warehouse[articleNo];
  if (article.open === false) {
    collapseAll();
    expandArt(article);
  } else {
    collapseArt(article);
  }
}

function evtHdl(evt) { if (prefValue) { evtEnabled(evt); } }

function makeHeaderClickable(row) {
  if (prefValue) { row.classList.add('fshPoint'); }
}

function collapseDuringAnalysis(row, thisArticle) {
  if (prefValue) {
    hideElement(row);
    // eslint-disable-next-line no-param-reassign
    thisArticle.open = false;
  } else {
    // eslint-disable-next-line no-param-reassign
    thisArticle.open = true;
  }
}

function hasExtraFn(extraFn, row) { if (isFunction(extraFn)) { extraFn(row); } }

function testRowType(row, rowType, thisArticle, param) {
  if (rowType === 0) {
    // eslint-disable-next-line no-param-reassign
    thisArticle.header = row;
    makeHeaderClickable(row);
    hasExtraFn(param.extraFn, row);
  }
  if (param.articleTest(rowType)) {
    // eslint-disable-next-line no-param-reassign
    thisArticle.rows[rowType] = fallback(thisArticle[rowType], {});
    // eslint-disable-next-line no-param-reassign
    thisArticle.rows[rowType].row = row;
    collapseDuringAnalysis(row, thisArticle);
  }
}

function doTagging(param, row) {
  const rowType = row.rowIndex % headerIndex;
  const articleNo = (row.rowIndex - rowType) / headerIndex;
  warehouse[articleNo] = fallback(warehouse[articleNo], {});
  const thisArticle = warehouse[articleNo];
  thisArticle.rows = thisArticle.rows || [];
  testRowType(row, rowType, thisArticle, param);
}

function togglePointer(article) { article.header.classList.toggle('fshPoint'); }

function toggleHeaderClass() {
  warehouse.forEach(togglePointer);
}

function togglePref(prefName) {
  prefValue = !prefValue;
  setValue(prefName, prefValue);
  if (prefValue) { collapseAll(); } else { expandAll(); }
  toggleHeaderClass();
}

function setupPref(prefName) {
  const prefEl = getElementById(prefName);
  prefValue = prefEl.checked;
  on(getElementById(prefName), 'change', partial(togglePref, prefName));
}

function collapse(param) {
  headerIndex = param.headInd;
  setupPref(param.prefName);
  arrayFrom(param.theTable.rows).forEach(partial(doTagging, param));
  onclick(param.theTable, evtHdl);
}

export { collapse as c };
//# sourceMappingURL=collapse-fddf7981.js.map
