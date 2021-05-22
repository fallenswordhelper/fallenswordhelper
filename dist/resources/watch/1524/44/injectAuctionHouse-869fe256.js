import { a as allthen } from './allthen-c5cfa8a4.js';
import { y as jQueryNotPresent, p as pCC, R as clickThis, z as getElementById, ay as cdn, u as indexAjaxData, ab as insertHtmlAfterBegin, o as onclick, I as getValue } from './calfSystem-23094c64.js';
import { c as createSpan } from './createSpan-40b8971a.js';
import { d as doStatTotal } from './doStatTotal-30784cd8.js';
import { g as getArrayByClassName } from './getArrayByClassName-2f871c5c.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-8efe6da6.js';
import './all-8d04560c.js';
import './insertElementBefore-7c440c87.js';

function doRefresh() {
  clickThis(getElementById('refresh'));
}

function doCancel(cancelButton) { // jQuery.min
  const itemImage = cancelButton.parentNode.parentNode.children[0].children[0];
  // eslint-disable-next-line no-param-reassign
  cancelButton.outerHTML = `<img src="${
    cdn}ui/misc/spinner.gif" width="14" height="14">`;
  return indexAjaxData({
    cmd: 'auctionhouse',
    subcmd: 'cancel',
    auction_id: /inv_id=(\d+)/.exec(itemImage.dataset.tipped)[1],
  });
}

function cancelAllAH() {
  const cancelButtons = getArrayByClassName('auctionCancel',
    getElementById('resultRows'));
  if (cancelButtons.length === 0) { return; }
  const prm = cancelButtons.map(doCancel);
  allthen(prm, doRefresh);
}

function makeCancelAll() {
  const fill = getElementById('fill');
  if (!fill) { return; }
  const cancelAllSpan = createSpan({
    className: 'smallLink',
    textContent: 'Cancel All',
  });
  const spacer = fill.parentNode.parentNode.nextElementSibling.children[0];
  spacer.classList.add('fshCenter');
  insertHtmlAfterBegin(spacer, ']');
  insertElementAfterBegin(spacer, cancelAllSpan);
  insertHtmlAfterBegin(spacer, '[');
  onclick(cancelAllSpan, cancelAllAH);
}

function autoFill() {
  if (getValue('autoFillMinBidPrice')) {
    clickThis(getElementById('auto-fill'));
  }
}

function injectAuctionHouse() {
  if (jQueryNotPresent() || !pCC) { return; }
  makeCancelAll();
  autoFill();
  doStatTotal();
  // clickThis(getElementById('sort0'));
}

export default injectAuctionHouse;
//# sourceMappingURL=injectAuctionHouse-869fe256.js.map
