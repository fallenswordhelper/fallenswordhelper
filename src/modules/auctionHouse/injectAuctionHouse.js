import daAuctionCancel from '../_dataAccess/daAuctionCancel';
import sendEvent from '../analytics/sendEvent';
import all from '../common/all';
import createSpan from '../common/cElement/createSpan';
import clickThis from '../common/clickThis';
import closestTr from '../common/closestTr';
import getArrayByClassName from '../common/getArrayByClassName';
import getElementById from '../common/getElementById';
import insertElementAfterBegin from '../common/insertElementAfterBegin';
import insertHtmlAfterBegin from '../common/insertHtmlAfterBegin';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import doStatTotal from '../profile/doStatTotal';
import { pcc } from '../support/layout';
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
    cdn
  }ui/misc/spinner.gif" width="14" height="14">`;
  return daAuctionCancel(
    getCustomUrlParameter(itemImage.dataset.tipped, 'inv_id'),
  );
}

async function cancelAllAH() {
  sendEvent('AH', 'cancelAllAH');
  const cancelButtons = getArrayByClassName(
    'auctionCancel',
    getElementById('resultRows'),
  );
  if (cancelButtons.length === 0) {
    return;
  }
  await all(cancelButtons.map(doCancel));
  doRefresh();
}

function makeCancelAll() {
  const spacer = closestTr(getElementById('fill'))?.nextElementSibling
    ?.children?.[0];
  if (!spacer) return;
  const cancelAllSpan = createSpan({
    className: 'smallLink',
    textContent: 'Cancel All',
  });
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
  if (jQueryNotPresent() || !pcc()) {
    return;
  }
  makeCancelAll();
  autoFill();
  doStatTotal();
  colourPlayerNames();
}
