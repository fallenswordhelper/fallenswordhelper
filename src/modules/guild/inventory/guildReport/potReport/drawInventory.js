import sendEvent from '../../../../analytics/sendEvent';
import createDiv from '../../../../common/cElement/createDiv';
import insertElement from '../../../../common/insertElement';
import keys from '../../../../common/keys';
import once from '../../../../common/once';
import partial from '../../../../common/partial';
import setInnerHtml from '../../../../dom/setInnerHtml';
import sortKeys from './sortKeys';

let inventory = 0;

function pivotPotObj(potOpts, potObj, acc, pot) {
  if (potOpts.myMap[pot] !== 'Ignore') {
    if (acc[potOpts.myMap[pot]]) {
      acc[potOpts.myMap[pot]] += potObj[pot];
    } else {
      acc[potOpts.myMap[pot]] = potObj[pot];
    }
  }
  return acc;
}

const checkBounds = (percent) => Math.max(Math.min(percent, 100), 0);
const toHex = (rgb) => (`000000${rgb.toString(16)}`).slice(-6);

function perc2color(percent) {
  const perc = checkBounds(percent);
  let red = 255;
  let green = 255;
  const blue = 0;
  if (perc < 50) {
    green = Math.round(5.1 * perc);
  } else {
    red = Math.round(510 - 5.10 * perc);
  }
  const rgb = red * 0x10000 + green * 0x100 + blue;
  const colour = toHex(rgb);
  return `#${colour}`;
}

function makeRowsFromPivot(potOpts, pivot, acc, pot) {
  return `${acc}<tr><td>${pot
  }</td><td style="background-color: ${
    perc2color(((pivot[pot] - potOpts.minpoint)
    / (potOpts.maxpoint - potOpts.minpoint)) * 100)};">${
    pivot[pot].toString()}</td></tr>`;
}

export function drawInventory(potOpts, potObj) {
  sendEvent('potReport', 'drawInventory');
  const pivot = sortKeys(keys(potObj)
    .reduce(partial(pivotPotObj, potOpts, potObj), {}));
  setInnerHtml(`<table><tbody>${
    keys(pivot).reduce(partial(makeRowsFromPivot, potOpts, pivot), '')
  }</tbody></table>`, inventory);
}

export function initInventory(potOpts, potObj, panels) {
  inventory = createDiv({ id: 'inventory' });
  if (potOpts.pottab1) {
    drawInventory(potOpts, potObj);
  } else {
    once(panels.parentNode.children[0], 'change', partial(drawInventory, potOpts, potObj));
  }
  insertElement(panels, inventory);
}
