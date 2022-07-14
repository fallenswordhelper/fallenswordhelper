import './rawData.css';
import createBr from '../../common/cElement/createBr';
import createButton from '../../common/cElement/createButton';
import createDiv from '../../common/cElement/createDiv';
import createTextArea from '../../common/cElement/createTextArea';
import dialogMsg from '../../common/dialogMsg';
import insertElement from '../../common/insertElement';
import jsonParse from '../../common/jsonParse';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import task from '../../support/task';
import { set } from '../../system/idb';
import { initTable } from './trackerTable';

let ioText = 0;
let saveBtn = 0;
let resetBtn = 0;
let io = 0;

function drawRawData(trackerData) {
  ioText.value = trackerData;
  io.classList.remove('fshSpinner');
}

export function queueRawData(trackerData) {
  if (trackerData) {
    io.classList.add('fshSpinner');
    task(4, drawRawData, [trackerData]);
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
  const newData = jsonParse(ioText.value);
  set('fsh_guildActivity', newData)
    .then(partial(successMsg, newData))
    .catch(dialogMsg);
}

function customButton(text, fn) {
  const btn = createButton({
    className: 'custombutton',
    textContent: text,
  });
  onclick(btn, fn);
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
  io = createDiv({ id: 'io', className: 'fshSpinner64' });
  makeIoText();
  saveBtn = customButton('Save', doSave);
  resetBtn = customButton('Reset', doReset);
  insertElement(io, ioText);
  insertElement(io, createBr());
  insertElement(io, saveBtn);
  insertElement(io, resetBtn);
  return io;
}
