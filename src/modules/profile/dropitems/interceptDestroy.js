import daDropItems from '../../_dataAccess/daDropItems';
import sendEvent from '../../analytics/sendEvent';
import chunk from '../../common/chunk';
import errorDialog from '../../common/errorDialog';
import eventHandler5 from '../../common/eventHandler5';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import on from '../../common/on';
import querySelector from '../../common/querySelector';
import selfIdIs from '../../common/selfIdIs';
import getCheckboxesArray from '../../guild/inventory/storeitems/getCheckboxesArray';
import { simpleCheckboxHtml } from '../../settings/simpleCheckbox';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';
import getCheckedItems from './getCheckedItems';
import removeRow from './removeRow';

function scopedCheck(mode) {
  getCheckboxesArray().forEach((ctx) => { ctx.checked = Boolean(mode); });
}

const prefAjaxifyDestroy = 'ajaxifyDestroy';
const prefDisableDestroyPrompts = 'disableDestroyPrompts';
let ajaxifyDestroy = 0;
let disableDestroyPrompts = 1;
let hcsConfirmDestroy = 0;

async function destroyChunk(itemsAry) {
  const json = await daDropItems(itemsAry.map((i) => i.value));
  errorDialog(json);
  if (!json.s) { return; }
  itemsAry.forEach(removeRow);
}

function submitHandler(e) {
  if (!e.returnValue || !ajaxifyDestroy) { return; }
  e.preventDefault();
  chunk(30, getCheckedItems()).forEach(destroyChunk);
  sendEvent('dropitems', 'Destroy by AJAX');
}

function fshConfirmDestroy() {
  sendEvent('dropitems', 'Destroy without prompts');
  return true;
}

function setDestroyPrompt() {
  window.confirmDestroy = disableDestroyPrompts ? fshConfirmDestroy : hcsConfirmDestroy;
}

function initDestroyPrompt() {
  disableDestroyPrompts = getValue(prefDisableDestroyPrompts);
  hcsConfirmDestroy = window.confirmDestroy;
  setDestroyPrompt();
}

function handleAjaxifyPref() {
  ajaxifyDestroy = !ajaxifyDestroy;
  setValue(prefAjaxifyDestroy, ajaxifyDestroy);
}

function handleDestroyPref() {
  disableDestroyPrompts = !disableDestroyPrompts;
  setValue(prefDisableDestroyPrompts, disableDestroyPrompts);
  setDestroyPrompt();
}

const changePref = () => eventHandler5([
  [selfIdIs(prefAjaxifyDestroy), handleAjaxifyPref],
  [selfIdIs(prefDisableDestroyPrompts), handleDestroyPref],
]);

function injectPrefs(submitBtn) {
  insertHtmlBeforeEnd(
    submitBtn.parentNode,
    `&nbsp;&nbsp;${simpleCheckboxHtml(prefAjaxifyDestroy)}&nbsp;&nbsp;${
      simpleCheckboxHtml(prefDisableDestroyPrompts)}`,
  );
  on(submitBtn.parentNode, 'change', changePref());
}

export default function interceptDestroy() {
  const submitBtn = querySelector('input[type="submit"]');
  if (!submitBtn) return;
  injectPrefs(submitBtn);
  initDestroyPrompt();
  ajaxifyDestroy = getValue(prefAjaxifyDestroy);
  on(document.forms[0], 'submit', submitHandler);
  window.check = scopedCheck;
}
