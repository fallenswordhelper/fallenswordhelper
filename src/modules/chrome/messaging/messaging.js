import './messaging.css';
import classHandler from '../../common/classHandler';
import fallback from '../../system/fallback';
import { getElementById } from '../../common/getElement';
import getElementsByClassName from '../../common/getElementsByClassName';
import getText from '../../common/getText';
import getValue from '../../system/getValue';
import getValueJSON from '../../system/getValueJSON';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import on from '../../common/on';
import onclick from '../../common/onclick';
import setText from '../../common/setText';
import setValueJSON from '../../system/setValueJSON';

let enterForSendMessage;
let quickMsgDialog;
let $quickMessageDialog;
let fshTemplate;
let msgTbl;
let sendMessage;
let targetPlayer;
let dialogMsg;
let validateTips;
let showingTemplates;

function getQuickMessageDialog() { // jQuery
  if (!quickMsgDialog) {
    quickMsgDialog = getElementById('quickMessageDialog');
  }
  if (!$quickMessageDialog) {
    $quickMessageDialog = $(quickMsgDialog);
  }
}

function getTable() {
  if (!msgTbl) {
    msgTbl = quickMsgDialog.lastElementChild;
  }
}

function setName(name) {
  targetPlayer = name;
  setText(name, getElementById('quickMsgDialog_targetUsername'));
}

function setMsg(msg) {
  dialogMsg = getElementById('quickMsgDialog_msg');
  dialogMsg.value = fallback(msg, '');
  dialogMsg.disabled = false;
}

function keypress(evt) {
  if (evt.key === 'Enter' && !evt.shiftKey) {
    evt.preventDefault();
    sendMessage();
  }
}

function captureEnter() {
  if (enterForSendMessage) {
    on(dialogMsg, 'keypress', keypress);
  }
}

function getValidateTips() {
  if (!validateTips) {
    const nodes = getElementsByClassName('validateTips', quickMsgDialog);
    if (nodes.length === 1) {
      validateTips = nodes[0];
    }
  }
}

function doValidateTip(text) {
  getValidateTips();
  if (validateTips) {
    setText(text, validateTips);
  }
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
  addRow(index, fshButton('del', 'Del'),
    `<span class="ui-widget-content fshBlck add-template">${
      text}</span>`);
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

function insertTemplate(target) {
  dialogMsg.value += `${getText(target)
    .replace(/\{playername\}/g, targetPlayer)}\n`;
}

const classEvents = [
  ['del-button', deleteTemplate],
  ['add-button', addNewTemplate],
  ['add-template', insertTemplate],
];

function makeRows(text) { addTemplateRow(-1, text); }

function showMsgTemplate() {
  if (!showingTemplates) {
    getTable();
    fshTemplate.forEach(makeRows);
    addRow(-1,
      fshButton('add', 'Add'),
      '<input id="newTmpl" class="ui-widget-content fshTmpl">');
    showingTemplates = true;
    onclick(msgTbl, classHandler(classEvents));
  }
}

function getFshTemplate() { // jQuery
  if (!fshTemplate) {
    fshTemplate = getValueJSON('quickMsg');
    const buttons = $quickMessageDialog.dialog('option', 'buttons');
    sendMessage = buttons['Send Message'];
  }
}

function openQuickMsgDialog(name, msg, tip) { // jQuery
  getQuickMessageDialog();
  if (quickMsgDialog.classList.contains('ui-dialog-content')) {
    getFshTemplate();
    showMsgTemplate();
    setName(name);
    setMsg(msg);
    captureEnter();
    doValidateTip(fallback(tip, ''));
    $quickMessageDialog.dialog('open');
  }
}

export default function injectQuickMsgDialogJQ() {
  if (jQueryNotPresent()) { return; }
  enterForSendMessage = getValue('enterForSendMessage');
  window.openQuickMsgDialog = openQuickMsgDialog;
}
