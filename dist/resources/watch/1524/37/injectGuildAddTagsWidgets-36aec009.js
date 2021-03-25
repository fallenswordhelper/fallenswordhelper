import { $ as $dataAccess, z as getElementById, c2 as injectGuild, f as insertHtmlBeforeEnd, F as querySelectorArray, S as clickThis, A as setText, s as partial, ao as cdn, g as getElementsByTagName, p as pCC, i as insertElement, o as onclick } from './calfSystem-6840a38e.js';
import { c as createInput } from './createInput-98d143f9.js';
import { t as takeItem, g as guildInventory } from './takeItem-2574941a.js';
import './guild-4cc45ab1.js';
import './dialog-8dd3ba22.js';
import './dialogMsg-f2f50c63.js';
import './indexAjaxJson-dfd6ce16.js';

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
//# sourceMappingURL=injectGuildAddTagsWidgets-36aec009.js.map
