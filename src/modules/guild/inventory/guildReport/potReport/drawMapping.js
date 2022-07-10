import sendEvent from '../../../../analytics/sendEvent';
import batch from '../../../../common/batch';
import createDiv from '../../../../common/cElement/createDiv';
import createInput from '../../../../common/cElement/createInput';
import createOption from '../../../../common/cElement/createOption';
import createSelect from '../../../../common/cElement/createSelect';
import createTable from '../../../../common/cElement/createTable';
import createTr from '../../../../common/cElement/createTr';
import entries from '../../../../common/entries';
import insertElement from '../../../../common/insertElement';
import insertHtmlBeforeEnd from '../../../../common/insertHtmlBeforeEnd';
import on from '../../../../common/on';
import once from '../../../../common/once';
import partial from '../../../../common/partial';
import setInnerHtml from '../../../../dom/setInnerHtml';
import setText from '../../../../dom/setText';
import task from '../../../../support/task';

let mapping = 0;
let selectRowTmp = 0;

function getRow() {
  const rowTmp = createTr();
  rowTmp.insertCell(-1);
  rowTmp.insertCell(-1);
  return rowTmp;
}

function setOption(value) {
  const option = createOption();
  option.value = value;
  option.text = value;
  return option;
}

function insertOption(selectTmp, el) {
  insertElement(selectTmp, setOption(el[0]));
}

function getSelect() {
  return createSelect({
    style: { width: '130px' },
  });
}

function getSelectRow() {
  if (!selectRowTmp) {
    selectRowTmp = getRow();
    const select = getSelect();
    selectRowTmp.cells[1].dataset.tooltip = 'Set to "Ignore" to exclude from report';
    insertElement(selectRowTmp.cells[1], select);
  }
  return selectRowTmp.cloneNode(true);
}

function insertRows(mapTbl, el) {
  const selectRow = getSelectRow();
  setText(el[0], selectRow.cells[0]);
  const select = selectRow.cells[1].children[0];
  insertElement(select, setOption(el[1]));
  [select.name, select.value] = el;
  insertElement(mapTbl.tBodies[0], selectRow);
}

function makeButton(row, id, val) {
  const btn = createInput({
    id,
    type: 'button',
    value: val,
  });
  insertElement(row.cells[1], btn);
}

function insertFinal(mapTbl) {
  const row = getRow();
  makeButton(row, 'fshIgnoreAll', 'Ignore All');
  insertHtmlBeforeEnd(row.cells[1], '&nbsp;');
  makeButton(row, 'fshReset', 'Reset');
  insertElement(mapTbl.tBodies[0], row);
}

function renderDropDown(myMap, e) {
  if (e.target.tagName === 'SELECT') {
    const select = e.target;
    const { value } = select;
    setInnerHtml('', select);
    insertElement(select, setOption('Ignore'));
    entries(myMap).forEach(partial(insertOption, select));
    select.value = value;
  }
}

export function drawMapping(potOpts) {
  sendEvent('potReport', 'drawMapping');
  const mapTbl = createTable({ innerHTML: '<tbody></tbody>' });
  mapping.replaceChild(mapTbl, mapping.children[0]);
  on(mapping, 'mousedown', partial(renderDropDown, potOpts.myMap));
  task(3, batch, [
    [
      3,
      entries(potOpts.myMap),
      0,
      partial(insertRows, mapTbl),
      partial(insertFinal, mapTbl),
    ],
  ]);
}

export function initMapping(potOpts, panels) {
  mapping = createDiv({ id: 'mapping', innerHTML: '<p></p>' });
  if (potOpts.pottab2) {
    drawMapping(potOpts);
  } else {
    once(panels.parentNode.children[2], 'change', partial(drawMapping, potOpts));
  }
  insertElement(panels, mapping);
}
