import add from '../../../support/task';
import batch from '../../../common/batch';
import insertElement from '../../../common/insertElement';
import once from '../../../common/once';
import partial from '../../../common/partial';
import {sendEvent} from '../../../support/fshGa';
import {
  createDiv,
  createInput,
  createOption,
  createSelect,
  createTable,
  createTr
} from '../../../common/cElement';

var mapping;
var selectRowTmp;

function getRow() {
  var rowTmp = createTr();
  rowTmp.insertCell(-1);
  rowTmp.insertCell(-1);
  return rowTmp;
}

function setOption(value) {
  var option = createOption();
  option.value = value;
  option.text = value;
  return option;
}

function getSelect(ary) {
  var selectTmp = createSelect({
    className: 'tip-static',
    dataset: {tipped: 'Set to "Ignore" to exclude from report'}
  });
  insertElement(selectTmp, setOption('Ignore'));
  ary.forEach(function(el) {
    insertElement(selectTmp, setOption(el[0]));
  });
  return selectTmp;
}

function getSelectRow(ary) {
  if (!selectRowTmp) {
    selectRowTmp = getRow();
    var select = getSelect(ary);
    insertElement(selectRowTmp.cells[1], select);
  }
  return selectRowTmp.cloneNode(true);
}

function insertRows(mapTbl, el, i, ary) {
  var selectRow = getSelectRow(ary);
  selectRow.cells[0].textContent = el[0];
  var select = selectRow.cells[1].children[0];
  select.name = el[0];
  select.value = el[1];
  insertElement(mapTbl.tBodies[0], selectRow);
}

function insertFinal(mapTbl) {
  var row = getRow();
  var input = createInput({
    id: 'fshReset',
    type: 'button',
    value: 'Reset'
  });
  insertElement(row.cells[1], input);
  insertElement(mapTbl.tBodies[0], row);
  return 0;
}

export function drawMapping(potOpts) {
  sendEvent('potReport', 'drawMapping');
  var mapTbl = createTable({innerHTML: '<tbody></tbody>'});
  mapping.replaceChild(mapTbl, mapping.children[0]);
  add(3, batch, [3, Object.entries(potOpts.myMap), 0,
    partial(insertRows, mapTbl), partial(insertFinal, mapTbl)]);
}

export function initMapping(potOpts, panels) {
  mapping = createDiv({id: 'mapping', innerHTML: '<p></p>'});
  if (potOpts.pottab2) {
    drawMapping(potOpts);
  } else {
    once(panels.parentNode.children[2], 'change',
      partial(drawMapping, potOpts));
  }
  insertElement(panels, mapping);
}