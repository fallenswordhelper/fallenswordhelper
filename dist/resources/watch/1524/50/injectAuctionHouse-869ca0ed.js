import { a as allthen } from './allthen-2ff5fddb.js';
import { y as jQueryNotPresent, p as pCC, R as clickThis, z as getElementById, aC as cdn, u as indexAjaxData, ae as insertHtmlAfterBegin, o as onclick, I as getValue } from './calfSystem-8168cf6d.js';
import { c as createSpan } from './createSpan-94249871.js';
import { d as doStatTotal } from './doStatTotal-7a6020bd.js';
import { g as getArrayByClassName } from './getArrayByClassName-3329015c.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-dad63ea4.js';
import './all-9b215cd1.js';
import './insertElementBefore-784d4581.js';

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
//# sourceMappingURL=injectAuctionHouse-869ca0ed.js.map