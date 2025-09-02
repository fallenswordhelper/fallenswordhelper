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
    const sellPrice = price.value;
    if (sellPrice.search(/^\d+$/) !== -1) marketplaceWarning(sellPrice);
    else clearWarning();
  }
}

const fspWanted = () => Number(getElementById('amount').value);

function btnListener() {
  const fsp = fspWanted();
  if (fsp) {
    const gold = Number(getElementById('statbar-gold').innerText.replaceAll(',', ''));
    const goldPerFsp = Math.floor(gold / fsp / 1.005);
    getElementById('price').value = goldPerFsp;
    addMarketplaceWarning();
  }
}

function addMaxButton() {
  const btn = createButton({
    innerText: 'Spend It All',
    class: 'custombutton',
    disabled: true,
    style: 'position: absolute',
  });
  onclick(btn, btnListener);
  closestTd(getElementById('price')).append(btn);
  on(
    getElementById('amount'),
    'change',
    () => { btn.disabled = !(fspWanted() > 0) },
  );
}
export default function marketplace() {
  addMaxButton();
  on(pcc(), 'keyup', addMarketplaceWarning);
}
