import closestTable from './common/closestTable';
import getElementById from './common/getElementById';
import on from './common/on';
import setInnerHtml from './dom/setInnerHtml';
import { pcc } from './support/layout';
import addCommas from './system/addCommas';

let amt = 0;
let prc = 0;
let warn = 0;

function getAmount() {
  if (!amt) { amt = getElementById('amount'); }
  return amt;
}

function getPrice() {
  if (!prc) { prc = getElementById('price'); }
  return prc;
}

function getWarning() {
  if (!warn) {
    const requestTable = closestTable(getAmount());
    const newRow = requestTable.insertRow(2);
    warn = newRow.insertCell(0);
    warn.colSpan = '2';
    warn.className = 'fshCenter';
  }
  return warn;
}

function totalPrice(amount, sellPrice) {
  const gross = amount * sellPrice;
  return gross + Math.ceil(gross / 200);
}

function marketplaceWarning(sellPrice) {
  const amount = getAmount().value;
  setInnerHtml(`<span class="fshBlue">You are offering to buy <b>${
    amount}</b> FSP for >> <b>${addCommas(sellPrice)}</b> (Total: ${
    addCommas(totalPrice(amount, sellPrice))})</span>`, getWarning());
}

function clearWarning() {
  if (warn && warn.innerHTML !== '') { setInnerHtml('', warn); }
}

function addMarketplaceWarning() {
  const price = getPrice();
  if (price) {
    const sellPrice = price.value;
    if (sellPrice.search(/^\d+$/) !== -1) {
      marketplaceWarning(sellPrice);
    } else { clearWarning(); }
  }
}

export default function marketplace() {
  on(pcc(), 'keyup', addMarketplaceWarning);
}
