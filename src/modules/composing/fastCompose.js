import './fastCompose.css';
import backgroundCreate from './backgroundCreate';
import contains from '../common/contains';
import createDiv from '../common/cElement/createDiv';
import createInput from '../common/cElement/createInput';
import createTable from '../common/cElement/createTable';
import getArrayByClassName from '../common/getArrayByClassName';
import { getPcc } from '../support/layout';
import insertElement from '../common/insertElement';
import insertElementAfter from '../common/insertElementAfter';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import once from '../common/once';
import onclick from '../common/onclick';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import querySelectorAll from '../common/querySelectorAll';
import querySelectorArray from '../common/querySelectorArray';
import sendEvent from '../analytics/sendEvent';
import setText from '../dom/setText';
import { subscribe } from '../support/pubsub';

function doTableClass(myTable, slotsLeft) {
  myTable.classList.add(`left-${slotsLeft.toString()}`);
}

function quickcreate(myTable) {
  const openTemplates = querySelectorAll('.quickCreate .sendLink');
  doTableClass(myTable, openTemplates.length);
}

function composePots(button, templateId) {
  sendEvent('composing', 'FastComposeButton');
  const openTemplates = querySelectorAll(
    '[id|="composing-template"]:not(#composing-template-multi)',
  );
  if (openTemplates.length < button.value) { return; }
  for (let i = 0; i < button.value; i += 1) {
    openTemplates[i].value = templateId;
    backgroundCreate(openTemplates[i].nextElementSibling.nextElementSibling, openTemplates[i]);
  }
}

function handleClick(evt) {
  const button = evt.target;
  const { templateId } = button.dataset;
  if (templateId) { composePots(button, templateId); }
}

function buildButton(val, templateId) {
  return createInput({
    className: 'awesome orange',
    dataset: { templateId },
    type: 'button',
    value: val,
  });
}

function buildCells(template, myRow, compSlot, i) {
  if (i === 0) {
    setText(template[1], myRow.insertCell(-1));
  }
  insertElement(
    myRow.insertCell(-1),
    buildButton((i + 1).toString(), template[0]),
  );
  return myRow;
}

function buildRows(compSlots, openSlots, myTable, template) {
  compSlots.reduce(partial(buildCells, template), myTable.insertRow(-1));
  return myTable;
}

function buildTable(templates, compSlots, openSlots) {
  const myTable = createTable({ id: 'fshFastCompose' });
  doTableClass(myTable, openSlots);
  return templates.reduce(partial(buildRows, compSlots, openSlots), myTable);
}

function keyValuePairs(el) { return [el.value, el.text]; }

function setupFastCompose(fcDiv, compSlots, openSlots) {
  const templates = querySelectorArray('#composing-template-multi option')
    .map(keyValuePairs);
  const myTable = buildTable(templates, compSlots, openSlots);
  insertElement(fcDiv, myTable);
  onclick(getPcc(), handleClick);
  subscribe('quickcreate', partial(quickcreate, myTable));
}

function drawList(fcDiv) {
  sendEvent('composing', 'FastCompose');
  insertHtmlBeforeEnd(fcDiv, '<br>');
  const compSlots = getArrayByClassName('composing-potion-time', document);
  const openSlots = compSlots.filter(contains('ETA: n/a')).length;
  if (openSlots > 0) {
    setupFastCompose(fcDiv, compSlots, openSlots);
  } else {
    insertHtmlBeforeEnd(fcDiv, 'No open slots!');
  }
}

export default function fastCompose() {
  const buttonDiv = querySelector('#pCC div.centered');
  insertHtmlAfterEnd(
    buttonDiv.children[1],
    ' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>',
  );
  const fcDiv = createDiv({ className: 'centered' });
  insertElementAfter(fcDiv, buttonDiv);
  const fcCheck = createInput({ id: 'fast-compose', type: 'checkbox' });
  insertElementAfter(fcCheck, buttonDiv);
  once(fcCheck, 'change', partial(drawList, fcDiv));
}
