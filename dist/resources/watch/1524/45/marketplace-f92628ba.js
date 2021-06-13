import { a as addCommas } from './addCommas-c0fbc0a2.js';
import { c as closestTable } from './closestTable-73233069.js';
import { k as on, p as pCC, z as getElementById, B as setInnerHtml } from './calfSystem-02fd040d.js';
import './closest-8e46d454.js';

let amt;
let prc;
let warn;

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
    if (sellPrice.search(/^[0-9]+$/) !== -1) {
      marketplaceWarning(sellPrice);
    } else { clearWarning(); }
  }
}

function marketplace() {
  on(pCC, 'keyup', addMarketplaceWarning);
}

export default marketplace;
//# sourceMappingURL=marketplace-f92628ba.js.map
