import sendEvent from './analytics/sendEvent';
import createDiv from './common/cElement/createDiv';
import getElementById from './common/getElementById';
import insertElement from './common/insertElement';
import on from './common/on';
import onclick from './common/onclick';
import setInnerHtml from './dom/setInnerHtml';
import { pcc } from './support/layout';
import addCommas from './system/addCommas';
import createButton from './common/cElement/createButton';
import closestTd from './common/closestTd';
import intValue from './system/intValue';
import getText from './common/getText';

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
  setInnerHtml(
    `You are offering to buy <b>${
      amount
    }</b> FSP for >> <b>${addCommas(sellPrice)}</b> (Total: ${addCommas(
      totalPrice(amount, sellPrice),
    )})`,
    getWarning(),
  );
}

function clearWarning() {
  if (warn?.innerHTML !== '') setInnerHtml('', warn);
}

function addMarketplaceWarning() {
  sendEvent('marketplace', 'addMarketplaceWarning');
  const price = getPrice();
  if (price) {
    const sellPrice = Number(price.value);
    if (sellPrice) marketplaceWarning(sellPrice);
    else clearWarning();
  }
}

function wallet() {
  return intValue(getText(getElementById('statbar-gold')));
}

function findMax(value) {
  if (value) return Math.floor(wallet() / value / 1.005);
  return '';
}

function makeMaxButton() {
  return createButton({
    innerText: 'Spend It All',
    style: 'font-size: 8px; position: absolute;',
  });
}

function addMaxButtons() {
  const maxFsp = makeMaxButton();
  onclick(maxFsp, () => {
    getPrice().value = findMax(Number(getAmount().value));
    addMarketplaceWarning();
  });
  closestTd(getAmount()).append(maxFsp);

  const maxGold = makeMaxButton();
  onclick(maxGold, () => {
    getAmount().value = findMax(Number(getPrice().value));
    addMarketplaceWarning();
  });
  closestTd(getPrice()).append(maxGold);
}

export default function marketplace() {
  addMaxButtons();
  on(pcc(), 'keyup', addMarketplaceWarning);
}
