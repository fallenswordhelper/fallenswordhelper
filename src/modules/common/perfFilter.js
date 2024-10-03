import daLoadInventory from '../_dataAccess/daLoadInventory';
import flattenItems from '../_dataAccess/export/flattenItems';
import sendEvent from '../analytics/sendEvent';
import { pcc } from '../support/layout';
import createDiv from './cElement/createDiv';
import clickThis from './clickThis';
import fromEntries from './fromEntries';
import getArrayByClassName from './getArrayByClassName';
import getElementById from './getElementById';
import insertElement from './insertElement';
import insertHtmlBeforeEnd from './insertHtmlBeforeEnd';
import jQueryNotPresent from './jQueryNotPresent';
import onclick from './onclick';
import partial from './partial';

let inv = 0;
let target = 0;

function clickOnPerf(el) {
  const thisItem = el.id.replace(`${target}-item-`, '');
  if (inv[thisItem]) clickThis(el);
}

function selectPerf(loc) {
  sendEvent('perfFilter', loc);
  const items = getArrayByClassName(
    'selectable-item',
    getElementById(`${target}-items`),
  );
  items.forEach(clickOnPerf);
}

function drawFilters(loc) {
  const buttonDiv = createDiv({ className: 'fshAC' });
  insertHtmlBeforeEnd(buttonDiv, '<button class="fshBl">Perfect</button>');
  insertElement(pcc(), buttonDiv);
  onclick(buttonDiv, partial(selectPerf, loc));
}

export default async function perfFilter(loc) {
  if (jQueryNotPresent()) return;
  target = loc;
  const data = await daLoadInventory();
  if (!data?.s) return;
  inv = fromEntries(
    flattenItems(data.r)
      .filter(({ cf }) => cf === 0)
      .map(({ a }) => [a, 1]),
  );
  drawFilters(loc);
}
