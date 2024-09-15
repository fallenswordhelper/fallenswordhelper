import sendEvent from './analytics/sendEvent';
import createDiv from './common/cElement/createDiv';
import getElementById from './common/getElementById';
import insertElement from './common/insertElement';
import on from './common/on';
import setInnerHtml from './dom/setInnerHtml';
import { pcc } from './support/layout';
import addCommas from './system/addCommas';

let amt = 0;
let prc = 0;
let warn = 0;

function getAmount() {
  if (!amt) amt = getElementById('amount');
  return amt;
}

function getPrice() {
  if (!prc) prc = getElementById('price');
  return prc;
}

function getWarning() {
  if (!warn) {
    warn = createDiv({ className: 'fshBlue fshCenter' });
    insertElement(pcc(), warn);
  }
  return warn;
}

function totalPrice(amount, sellPrice) {
  const gross = amount * sellPrice;
  return gross + Math.ceil(gross / 200);
}

function marketplaceWarning(sellPrice) {
  const amount = getAmount().value;
  setInnerHtml(`You are offering to buy <b>${
    amount}</b> FSP for >> <b>${addCommas(sellPrice)}</b> (Total: ${
    addCommas(totalPrice(amount, sellPrice))})`, getWarning());
}

function clearWarning() {
  if (warn?.innerHTML !== '') setInnerHtml('', warn);
}

let signalSent = false;

function addMarketplaceWarning() {
  if (!signalSent) {
    sendEvent('marketplace', 'addMarketplaceWarning');
    signalSent = true;
  }
  const price = getPrice();
  if (price) {
    const sellPrice = price.value;
    if (sellPrice.search(/^\d+$/) !== -1) marketplaceWarning(sellPrice);
    else clearWarning();
  }
}

export default function marketplace() {
  on(pcc(), 'keyup', addMarketplaceWarning);
}
