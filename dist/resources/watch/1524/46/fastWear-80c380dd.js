import { B as setInnerHtml, T as sendEvent, A as setText, s as partial, h as hasClass, b as createDiv, i as insertElement, F as querySelectorArray, z as getElementById, C as getText, a as add, o as onclick } from './calfSystem-86663d02.js';
import { e as equipItem, u as useItem } from './useItem-dd1d2a7a.js';
import { g as getBackpack, m as monkeyBp } from './monkeyBp-aaca3f40.js';
import './dialog-16fed349.js';
import './dialogMsg-16959bc2.js';
import './indexAjaxJson-7a15a235.js';
import './daUseItem-8390f166.js';
import './errorDialog-2e0e2853.js';

var css$1 = ".fastDiv {\n  display: flex;\n  height: 16px;\n  justify-content: center;\n}\n.fastAction {\n  font-size: 12px;\n  /* margin-right: 0.2em; */\n  position: relative;\n  top: -10%;\n  width: 3em;\n}\n";
var modules_6988bf06 = {};

function backpackRemove(theBackpack, invId) {
  // remove from srcData
  const i = theBackpack.srcData.findIndex((el) => el.a === invId);
  if (i !== -1) { theBackpack.srcData.splice(i, 1); }
}

function actionResult([theBackpack, result, target, invId], data) {
  if (data.r !== 0) {
    target.remove();
    return;
  }
  backpackRemove(theBackpack, invId);
  target.classList.remove('fshSpinner');
  setInnerHtml(`<span class="fastWorn">${result}</span>`, target.parentNode);
}

function fastAction(theBackpack, evt, action, result) {
  sendEvent('profile', `fastAction - ${result}`);
  const { target } = evt;
  const invId = target.parentNode.parentNode.children[0].dataset.inv;
  setText('', target);
  target.blur();
  target.className = 'fastAction fshBl fshSpinner fshSpinner12';
  action(invId).then(
    partial(actionResult, [theBackpack, result, target, invId]),
  );
}

function fastEvent(theBackpack, evt) {
  if (hasClass('fastWear', evt.target)) {
    fastAction(theBackpack, evt, equipItem, 'Worn');
  }
  if (hasClass('fastUse', evt.target)) {
    fastAction(theBackpack, evt, useItem, 'Used');
  }
}

function actionClass(usable) {
  if (usable) { return 'fastUse'; }
  return 'fastWear';
}

function actionText(usable) {
  if (usable) { return 'Use'; }
  return 'Wear';
}

function drawButtons(bp, theSpan) {
  const toUse = hasClass('backpackContextMenuUsable', theSpan);
  const myDiv = createDiv({
    className: 'fastDiv',
    innerHTML: `<button class="fshBl fastAction ${
      actionClass(toUse)}">${actionText(toUse)}</button>`,
  });
  if (bp.options.checkboxesEnabled) {
    insertElement(myDiv,
      theSpan.parentNode.nextElementSibling.nextElementSibling);
  }
  insertElement(theSpan.parentNode.parentNode, myDiv);
}

function fastWearLinks(bp) {
  const items = querySelectorArray(`#backpackTab_${
    bp.type.toString()} .backpackContextMenuEquippable, #backpackTab_${
    bp.type.toString()} .backpackContextMenuUsable`);
  items.forEach(partial(drawButtons, bp));
}

var css = ".fshBackpack  {height: 490px;}\n.backpackTabContent > div {width: 60px;}\n.fshBackpack .backpackTabContent > div {height: 110px;}\n";
var modules_1acd54f5 = {};

function restyleBackpack() {
  const bpBack = getElementById('backpack');
  bpBack.className = 'fshBackpack';
  bpBack.removeAttribute('style');
}

function foundBackpack(theBackpack) {
  restyleBackpack();
  monkeyBp(theBackpack, fastWearLinks);
  if (getText(getElementById('backpack_current')).length !== 0) {
    add(3, fastWearLinks, [theBackpack]);
  }
  onclick(getElementById('backpackContainer'), partial(fastEvent, theBackpack));
}

function injectFastWear() {
  const theBackpack = getBackpack();
  if (theBackpack) { foundBackpack(theBackpack); }
}

export default injectFastWear;
//# sourceMappingURL=fastWear-80c380dd.js.map
