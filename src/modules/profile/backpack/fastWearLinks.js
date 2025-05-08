import createDiv from '../../common/cElement/createDiv';
import hasClass from '../../common/hasClass';
import insertElement from '../../common/insertElement';
import partial from '../../common/partial';
import querySelectorArray from '../../common/querySelectorArray';

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
    insertElement(myDiv, theSpan.parentNode.nextElementSibling.nextElementSibling);
  }
  insertElement(theSpan.parentNode.parentNode, myDiv);
}

export default function fastWearLinks(bp) {
  const items = querySelectorArray(`#backpackTab_${
    bp.type.toString()} .backpackContextMenuEquippable, #backpackTab_${
    bp.type.toString()} .backpackContextMenuUsable`);
  items.forEach(partial(drawButtons, bp));
}
