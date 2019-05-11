import './rawData.postcss';
import add from '../../support/task';
import dialogMsg from '../../common/dialogMsg';
import {initTable} from './trackerTable';
import insertElement from '../../common/insertElement';
import jsonParse from '../../common/jsonParse';
import on from '../../common/on';
import partial from '../../common/partial';
import setForage from '../../ajax/setForage';
import {
  createBr,
  createButton,
  createDiv,
  createTextArea,
} from '../../common/cElement';

var ioText;
var saveBtn;
var resetBtn;
var io;

function drawRawData(trackerData) {
  ioText.value = trackerData;
  io.classList.remove('fshSpinner');
}

export function queueRawData(trackerData) {
  if (trackerData) {
    io.classList.add('fshSpinner');
    add(4, drawRawData, [trackerData]);
  }
}

function doReset() {
  ioText.value = '{"lastUpdate": 0, "members": {}}';
}

function successMsg(newData) {
  dialogMsg('Update successful');
  initTable(newData.members);
}

function doSave() {
  var newData = jsonParse(ioText.value);
  setForage('fsh_guildActivity', newData)
    .then(partial(successMsg, newData))
    .catch(dialogMsg);
}

function customButton(text, fn) {
  var btn = createButton({
    className: 'custombutton',
    textContent: text
  });
  on(btn, 'click', fn);
  return btn;
}

function makeIoText() {
  ioText = createTextArea();
  ioText.setAttribute('autocapitalize', 'off');
  ioText.setAttribute('autocomplete', 'off');
  ioText.setAttribute('autocorrect', 'off');
  ioText.setAttribute('spellcheck', 'false');
}

export function makeInOut() {
  io = createDiv({id: 'io', className: 'fshSpinner64'});
  makeIoText();
  saveBtn = customButton('Save', doSave);
  resetBtn = customButton('Reset', doReset);
  insertElement(io, ioText);
  insertElement(io, createBr());
  insertElement(io, saveBtn);
  insertElement(io, resetBtn);
  return io;
}
