import fetchdata from '../../ajax/fetchdata';
import all from '../../common/all';
import createButton from '../../common/cElement/createButton';
import createDiv from '../../common/cElement/createDiv';
import createInput from '../../common/cElement/createInput';
import getElementById from '../../common/getElementById';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import onclick from '../../common/onclick';
import remainingPages from '../../common/remainingPages';
import setText from '../../dom/setText';
import { defShopPrompt } from '../../support/constants';
import addCommas from '../../system/addCommas';
import testQuant from '../../system/testQuant';

let shoppingData = 0;
let dialog = 0;
let jDialog = 0;
let fshDiv = 0;
let numInput = 0;
let resultDiv = 0;

async function quickBuy() {
  const data = await fetchdata({
    a: 14,
    d: 0,
    id: shoppingData.id,
    item_id: shoppingData.itemId,
  });
  const resp = data.response.response;
  const rmsg = data.response.msg;
  let msg = rmsg;
  if (resp !== 0) {
    const firstTag = rmsg.indexOf('<');
    if (firstTag !== -1) {
      msg = rmsg.substring(0, firstTag);
    }
  } else {
    msg = `You purchased ${data.response.data.name} for ${
      addCommas(data.response.data.cost)} gold.`;
  }
  insertHtmlBeforeEnd(resultDiv, `${msg}<br>`);
}

function normalBuy() {
  GameData.doAction(14, 3, {
    id: shoppingData.id,
    item_id: shoppingData.itemId,
  }, 0);
  jDialog.close();
}

async function qBuy() {
  const theValue = testQuant(numInput.value);
  if (!theValue) return;
  await all(remainingPages(theValue, quickBuy));
  normalBuy();
}

function injectQuickBuy() {
  fshDiv = createDiv({
    className: 'fshClear',
    textContent: 'Select how many to quick-buy:',
  });
  numInput = createInput({
    id: 'buyAmount',
    className: 'fshNumberInput',
    min: 1,
    max: 99,
    value: 1,
    type: 'number',
  });
  insertElement(fshDiv, numInput);
  const qbBtn = createButton({ textContent: 'Quick-buy' });
  onclick(qbBtn, qBuy);
  insertElement(fshDiv, qbBtn);
  resultDiv = createDiv();
  insertElement(fshDiv, resultDiv);
  insertElement(dialog, fshDiv);
}

function getDialog() {
  return dialog || getElementById('shopDialogConfirm');
}

function getJDialog() { // jQuery
  return jDialog || $(dialog).data('hcsWorldDialogShopConfirm');
}

function initQuickBuy() {
  if (!fshDiv) {
    injectQuickBuy();
  } else {
    setText('', resultDiv);
  }
}

function worldDialogShop(_e, data) {
  shoppingData = data;
  dialog = getDialog();
  if (!dialog) { return; }
  jDialog = getJDialog();
  if (jDialog) { initQuickBuy(); }
}

export default function shop() {
  $.subscribe(defShopPrompt, worldDialogShop);
}
