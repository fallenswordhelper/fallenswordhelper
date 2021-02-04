import { A as setInnerHtml, X as sendEvent, z as setText, s as partial, h as hasClass, b as createDiv, i as insertElement, E as querySelectorArray, y as getElementById, B as getText, a as add, o as onclick } from './calfSystem-cc2b30b5.js';
import { e as equipItem, u as useItem } from './useItem-799678d1.js';
import { g as getBackpack, m as monkeyBp } from './monkeyBp-360f96ea.js';
import './dialog-fd1181f5.js';
import './dialogMsg-fcad563e.js';
import './indexAjaxJson-ae1ced20.js';
import './daUseItem-61e17e3a.js';
import './errorDialog-998604da.js';

var css = ".fastDiv {\n  display: flex;\n  height: 16px;\n  justify-content: center;\n}\n.fastAction {\n  font-size: 12px;\n  /* margin-right: 0.2em; */\n  position: relative;\n  top: -10%;\n  width: 3em;\n}\n";
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

var css$1 = ".fshBackpack  {height: 490px;}\n.backpackTabContent > div {width: 60px;}\n.fshBackpack .backpackTabContent > div {height: 110px;}\n";
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
//# sourceMappingURL=fastWear-ac7ce896.js.map
