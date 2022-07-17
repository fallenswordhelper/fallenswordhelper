import getInventoryById from '../ajax/getInventoryById';
import { pcc } from '../support/layout';
import createDiv from './cElement/createDiv';
import clickThis from './clickThis';
import getArrayByClassName from './getArrayByClassName';
import getElementById from './getElementById';
import insertElement from './insertElement';
import insertHtmlBeforeEnd from './insertHtmlBeforeEnd';
import jQueryNotPresent from './jQueryNotPresent';
import onclick from './onclick';

let inv = 0;
let target = 0;

function clickOnPerf(el) {
  const thisItem = el.id.replace(`${target}-item-`, '');
  if (inv[thisItem] && inv[thisItem].craft === 'Perfect') { clickThis(el); }
}

function selectPerf() {
  const items = getArrayByClassName('selectable-item', getElementById(`${target}-items`));
  if (items.length === 0) { return; } // ?
  items.forEach(clickOnPerf);
}

function drawFilters(data) {
  inv = data.items;
  const buttonDiv = createDiv({ className: 'fshAC' });
  insertHtmlBeforeEnd(buttonDiv, '<button class="fshBl">Perfect</button>');
  insertElement(pcc(), buttonDiv);
  onclick(buttonDiv, selectPerf);
}

export default function perfFilter(loc) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  target = loc;
  getInventoryById().then(drawFilters);
}
