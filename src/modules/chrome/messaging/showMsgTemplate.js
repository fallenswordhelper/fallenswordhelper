import classHandler from '../../common/classHandler';
import getText from '../../common/getText';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import onclick from '../../common/onclick';
import getValue from '../../system/getValue';
import getValueJSON from '../../system/getValueJSON';
import setValueJSON from '../../system/setValueJSON';
import getMsg from './getMsg';
import getQuickMessageDialog from './getQuickMessageDialog';
import { getName } from './targetPlayer';

let fshTemplate = 0;
let msgTbl = 0;
let showingTemplates = 0;

function getFshTemplate() {
  if (!fshTemplate) {
    fshTemplate = getValueJSON('quickMsg');
  }
  return fshTemplate;
}

function getTable() {
  if (!msgTbl) {
    msgTbl = getQuickMessageDialog().lastElementChild;
  }
  return msgTbl;
}

function addRow(index, myBtn, html) {
  const newRow = msgTbl.insertRow(index);
  let newCell = newRow.insertCell(-1);
  insertHtmlBeforeEnd(newCell, myBtn);
  newCell = newRow.insertCell(-1);
  insertHtmlBeforeEnd(newCell, html);
}

function fshButton(classPrefix, label) {
  return `<button class="fshButton ui-corner-all ${classPrefix
  }-button">${label}</button>`;
}

function addTemplateRow(index, text) {
  addRow(
    index,
    fshButton('del', 'Del'),
    `<span class="ui-widget-content fshBlck add-template">${text}</span>`,
  );
}

function insertTemplate(target) {
  getMsg().value += `${getText(target)
    .replace(/\{playername\}/g, getName())}`;
}

function deleteTemplate(target) {
  const myRow = target.parentNode.parentNode.rowIndex;
  msgTbl.deleteRow(myRow);
  fshTemplate.splice(myRow - 2, 1);
  setValueJSON('quickMsg', fshTemplate);
}

function addNewTemplate(target) {
  const templateInput = target.parentNode.nextElementSibling.children[0];
  const templateValue = templateInput.value;
  if (templateValue !== '') {
    const myRow = target.parentNode.parentNode.rowIndex;
    addTemplateRow(myRow, templateValue);
    templateInput.value = '';
    fshTemplate.push(templateValue);
    setValueJSON('quickMsg', fshTemplate);
  }
}

const classEvents = [
  ['del-button', deleteTemplate],
  ['add-button', addNewTemplate],
  ['add-template', insertTemplate],
];

function makeRows(text) { addTemplateRow(-1, text); }

export default function showMsgTemplate() {
  if (getValue('enableMessageTemplates') && !showingTemplates) {
    onclick(getTable(), classHandler(classEvents));
    getFshTemplate().forEach(makeRows);
    addRow(
      -1,
      fshButton('add', 'Add'),
      '<input id="newTmpl" class="ui-widget-content fshTmpl">',
    );
    showingTemplates = true;
  }
}
