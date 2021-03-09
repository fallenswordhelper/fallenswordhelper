import { x as jQueryNotPresent, R as clickThis, y as getElementById, b as createDiv, f as insertHtmlBeforeEnd, i as insertElement, p as pCC, o as onclick } from './calfSystem-d1de1997.js';
import { g as getArrayByClassName } from './getArrayByClassName-9d3853c0.js';
import { g as getInventoryById } from './getInventoryById-ad5a1c21.js';

let inv;
let target;

function clickOnPerf(el) {
  const thisItem = el.id.replace(`${target}-item-`, '');
  if (inv[thisItem] && inv[thisItem].craft === 'Perfect') { clickThis(el); }
}

function selectPerf() {
  const items = getArrayByClassName('selectable-item',
    getElementById(`${target}-items`));
  if (items.length === 0) { return; } // ?
  items.forEach(clickOnPerf);
}

function drawFilters(data) {
  inv = data.items;
  const buttonDiv = createDiv({ className: 'fshAC' });
  insertHtmlBeforeEnd(buttonDiv,
    '<button class="fshBl">Perfect</button>');
  insertElement(pCC, buttonDiv);
  onclick(buttonDiv, selectPerf);
}

function perfFilter(loc) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  target = loc;
  getInventoryById().then(drawFilters);
}

export { perfFilter as p };
//# sourceMappingURL=perfFilter-154b15f9.js.map
