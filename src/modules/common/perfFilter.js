import clickThis from './clickThis';
import {createDiv} from './cElement';
import getArrayByClassName from './getArrayByClassName';
import {getElementById} from '../common/getElement';
import getInventoryById from '../ajax/getInventoryById';
import insertElement from './insertElement';
import insertHtmlBeforeEnd from './insertHtmlBeforeEnd';
import jQueryNotPresent from './jQueryNotPresent';
import on from './on';
import {pCC} from '../support/layout';

var inv;
var target;

function clickOnPerf(el) {
  var thisItem = el.id.replace(target + '-item-', '');
  if (inv[thisItem] && inv[thisItem].craft === 'Perfect') {clickThis(el);}
}

function selectPerf() {
  var items = getArrayByClassName('selectable-item',
    getElementById(target + '-items'));
  if (items.length === 0) {return;} // ?
  items.forEach(clickOnPerf);
}

function drawFilters(data) {
  inv = data.items;
  var buttonDiv = createDiv({className: 'fshAC'});
  insertHtmlBeforeEnd(buttonDiv,
    '<button class="fshBl">Perfect</button>');
  insertElement(pCC, buttonDiv);
  on(buttonDiv, 'click', selectPerf);
}

export default function perfFilter(loc) { // jQuery.min
  if (jQueryNotPresent()) {return;}
  target = loc;
  getInventoryById().then(drawFilters);
}