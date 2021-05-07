import { $ as $dataAccess, z as getElementById, c2 as injectGuild, f as insertHtmlBeforeEnd, F as querySelectorArray, S as clickThis, A as setText, s as partial, ax as cdn, g as getElementsByTagName, p as pCC, i as insertElement, o as onclick } from './calfSystem-476ab75d.js';
import { c as createInput } from './createInput-a1c8d139.js';
import { t as takeItem, g as guildInventory } from './takeItem-7456490e.js';
import './guild-223136b1.js';
import './dialog-de7a7b58.js';
import './dialogMsg-3c26aecb.js';
import './indexAjaxJson-2772144f.js';

function formatResults(json) {
  if (json.r === 0) { return { s: true }; }
  return { e: { message: json.m }, s: false };
}

function gsTake(invId) {
  return takeItem(invId).then(formatResults);
}

function takeitem(invId) {
  return guildInventory({
    subcmd2: 'takeitem',
    guildstore_id: invId,
  });
}

function daGsTake(invId) {
  return $dataAccess(takeitem, gsTake, invId);
}

function doItemTable(checkbox) {
  insertHtmlBeforeEnd(checkbox.parentNode.nextElementSibling
    .nextElementSibling, '&nbsp;<span class="sendLink">Fast BP</span>');
}

function doCheckAll() {
  querySelectorArray('#pCC input[name="tagIndex[]"]').forEach(clickThis);
}

function takeResult(target, data) {
  if (data.s) {
    target.removeAttribute('style');
    // eslint-disable-next-line no-param-reassign
    target.className = 'fshGreen';
    setText('Taken', target);
  }
}

function fastBp(el) {
  const itmId = el.parentNode.previousElementSibling.previousElementSibling
    .children[0].value;
  daGsTake(itmId).then(partial(takeResult, el));
  setText('', el);
  // eslint-disable-next-line no-param-reassign
  el.className = 'guildTagSpinner';
  // eslint-disable-next-line no-param-reassign
  el.style.backgroundImage = `url('${cdn
  }ui/misc/spinner.gif')`;
}

function evtHdlr(e) {
  const { target } = e;
  if (target.value === 'Check All') { doCheckAll(); }
  if (target.className === 'sendLink') { fastBp(target); }
}

function paintTable() {
  querySelectorArray('#pCC input[name="tagIndex[]"]').forEach(doItemTable);
}

function checkAllBtn() {
  const checkAll = createInput({ type: 'button', value: 'Check All' });
  const formTags = getElementsByTagName('form', pCC);
  if (formTags.length === 1) {
    insertElement(formTags[0].previousElementSibling.cells[0], checkAll);
  }
}

function doItemTagging() {
  onclick(pCC, evtHdlr);
  paintTable();
  checkAllBtn();
}

function injectGuildAddTagsWidgets() {
  if (getElementById('tagging_cost')) {
    doItemTagging();
  } else {
    injectGuild();
  }
}

export default injectGuildAddTagsWidgets;
//# sourceMappingURL=injectGuildAddTagsWidgets-226c7d1b.js.map
