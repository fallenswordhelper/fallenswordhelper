import { cdn } from '../../system/system';
import createSpan from '../../common/cElement/createSpan';
import createTBody from '../../common/cElement/createTBody';
import createTable from '../../common/cElement/createTable';
import daComponents from '../../_dataAccess/daComponents';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import insertTextBeforeEnd from '../../common/insertTextBeforeEnd';
import isArray from '../../common/isArray';
import partial from '../../common/partial';
import playerId from '../../common/playerId';
import sendEvent from '../../analytics/sendEvent';
import setInnerHtml from '../../dom/setInnerHtml';
import { componentList, prepareComponentList } from './prepareComponentList';

function tallyTableRow(acc, comp) {
  return `${acc}<tr><td><img src="${cdn}items/${comp.b
  }.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?`
    + `item_id=${comp.b}&inv_id=${comp.a}&t=2&p=${playerId()
    }&vcode=${comp.v}"></td><td>${comp.count
    }</td><td>[<span class="sendLink compDelType" data-compid="${comp.b
    }">Del</span>]</td></tr>`;
}

function makeTallyTbody(data) {
  const tBody = createTBody();
  prepareComponentList(data);
  insertHtmlBeforeEnd(tBody,
    `<tr><td colspan="3">Component Summary</td></tr>${
      Object.values(componentList).reduce(tallyTableRow, '')}`);
  return tBody;
}

function makeTotalCell(tbl) {
  const totRow = tbl.insertRow(-1);
  insertHtmlBeforeEnd(totRow, '<td>Total:</td>');
  const totCell = totRow.insertCell(-1);
  totCell.colSpan = 2;
  return totCell;
}

function makeUsedCount(data) {
  const usedCount = data.r.length;
  const usedCountDom = createSpan();
  setInnerHtml(usedCount, usedCountDom);
  return usedCountDom;
}

function makeTotalRow(tbl, data) {
  const totCell = makeTotalCell(tbl);
  insertElement(totCell, makeUsedCount(data));
  insertTextBeforeEnd(totCell, ' / TODO'); // TODO
}

function makeTallyTable(data) {
  const tbl = createTable({ className: 'fshTblCenter', id: 'fshTally' });
  insertElement(tbl, makeTallyTbody(data));
  makeTotalRow(tbl, data);
  return tbl;
}

function displayComponentTally(target, data) {
  if (!isArray(data.r)) { return; }
  const sumComp = target.parentNode;
  if (sumComp) {
    setInnerHtml('', sumComp);
    insertElement(sumComp, makeTallyTable(data));
  }
}

export default function countComponent(target) { // jQuery.min
  sendEvent('components', 'countComponent');
  daComponents().then(partial(displayComponentTally, target));
}
