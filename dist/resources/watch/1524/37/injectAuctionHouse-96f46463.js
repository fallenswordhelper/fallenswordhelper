import { a as allthen } from './allthen-e710674d.js';
import { y as jQueryNotPresent, p as pCC, S as clickThis, z as getElementById, ao as cdn, u as indexAjaxData, ac as insertHtmlAfterBegin, o as onclick, I as getValue } from './calfSystem-6840a38e.js';
import { c as createSpan } from './createSpan-66655207.js';
import { d as doStatTotal } from './doStatTotal-d40c4f8b.js';
import { g as getArrayByClassName } from './getArrayByClassName-8e96c4f0.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-7817ee91.js';
import './all-d206e4b9.js';
import './insertElementBefore-656c48d5.js';

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
  const cancelAll = createSpan({
    className: 'smallLink',
    textContent: 'Cancel All',
  });
  const fill = getElementById('fill').parentNode.parentNode
    .nextElementSibling.children[0];
  fill.classList.add('fshCenter');
  insertHtmlAfterBegin(fill, ']');
  insertElementAfterBegin(fill, cancelAll);
  insertHtmlAfterBegin(fill, '[');
  onclick(cancelAll, cancelAllAH);
}

function autoFill() {
  if (getValue('autoFillMinBidPrice')) {
    // getElementById('auto-fill').checked = true;
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
//# sourceMappingURL=injectAuctionHouse-96f46463.js.map
