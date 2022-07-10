import indexAjaxData from '../ajax/indexAjaxData';
import allthen from '../common/allthen';
import createSpan from '../common/cElement/createSpan';
import clickThis from '../common/clickThis';
import getArrayByClassName from '../common/getArrayByClassName';
import getElementById from '../common/getElementById';
import insertElementAfterBegin from '../common/insertElementAfterBegin';
import insertHtmlAfterBegin from '../common/insertHtmlAfterBegin';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import doStatTotal from '../profile/doStatTotal';
import { getPcc } from '../support/layout';
import getCustomUrlParameter from '../system/getCustomUrlParameter';
import getValue from '../system/getValue';
import { cdn } from '../system/system';
import colourPlayerNames from './colourPlayerNames';

function doRefresh() {
  clickThis(getElementById('refresh'));
}

function doCancel(ctx) {
  const [itemImage] = ctx.parentNode.parentNode.children[0].children;
  ctx.outerHTML = `<img src="${
    cdn}ui/misc/spinner.gif" width="14" height="14">`;
  return indexAjaxData({
    cmd: 'auctionhouse',
    subcmd: 'cancel',
    auction_id: getCustomUrlParameter(itemImage.dataset.tipped, 'inv_id'),
  });
}

function cancelAllAH() {
  const cancelButtons = getArrayByClassName('auctionCancel', getElementById('resultRows'));
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
  const [spacer] = fill.parentNode.parentNode.nextElementSibling.children;
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

export default function injectAuctionHouse() {
  if (jQueryNotPresent() || !getPcc()) { return; }
  makeCancelAll();
  autoFill();
  doStatTotal();
  colourPlayerNames();
}
