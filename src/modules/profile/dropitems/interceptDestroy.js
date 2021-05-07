import chunk from '../../common/chunk';
import daDropItems from '../../_dataAccess/daDropItems';
import errorDialog from '../../common/errorDialog';
import getCheckboxesArray from '../../guild/inventory/storeitems/getCheckboxesArray';
import getCheckedItems from './getCheckedItems';
import getValue from '../../system/getValue';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import on from '../../common/on';
import querySelector from '../../common/querySelector';
import removeRow from './removeRow';
import sendEvent from '../../analytics/sendEvent';
import setValue from '../../system/setValue';
import { simpleCheckboxHtml } from '../../settings/simpleCheckbox';

function check(mode) {
  getCheckboxesArray().forEach((ctx) => { ctx.checked = Boolean(mode); });
}

const prefAjaxifyDestroy = 'ajaxifyDestroy';
let ajaxifyDestroy;

const destroyChunk = (itemsAry) => {
  daDropItems(itemsAry.map((i) => i.value))
    .then(errorDialog)
    .then((json) => {
      if (!json.s) { return; }
      itemsAry.forEach(removeRow);
    });
};

const checkItems = (e) => {
  if (!e.returnValue || !ajaxifyDestroy) { return; }
  e.preventDefault();
  chunk(30, getCheckedItems()).forEach(destroyChunk);
  sendEvent('dropitems', 'Destroy by AJAX');
};

function changePref() {
  ajaxifyDestroy = !ajaxifyDestroy;
  setValue(prefAjaxifyDestroy, ajaxifyDestroy);
}

const injectPref = () => {
  const submitBtn = querySelector('input[type="submit"]');
  insertHtmlBeforeEnd(submitBtn.parentNode,
    `&nbsp;&nbsp;${simpleCheckboxHtml(prefAjaxifyDestroy)}`);
  on(submitBtn.parentNode, 'change', changePref);
};

export default function interceptDestroy() {
  injectPref();
  ajaxifyDestroy = getValue(prefAjaxifyDestroy);
  on(document.forms[0], 'submit', checkItems);
  window.check = check;
}
