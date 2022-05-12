import createDocument from '../system/createDocument';
import indexAjaxData from '../ajax/indexAjaxData';
import jQueryPresent from '../common/jQueryPresent';
import partial from '../common/partial';
import { defTable, guildSubcmdUrl } from '../support/constants';

const statbarGold = '#pH #statbar-gold';
const statbarGoldTooltip = '#pH #statbar-gold-tooltip-general dd';
const pccB = '#pCC b';
const infoMsg = '#pCC #info-msg';
const withdrawAmount = '#pCC #withdraw_amount';
const depositAmount = '#pCC #deposit_amount';
const disabled = 'disabled';
const inputDepo = '#pCC input[value="Deposit"]';

function doInfoBox(infoBox) { // jQuery
  const target = $(infoMsg);
  if (target.length === 0) {
    $('#pCC').prepend(infoBox.closest(defTable));
  } else {
    target.closest(defTable).replaceWith(infoBox.closest(defTable));
  }
}

function eachGoldValue(doc, index) {
  return $(statbarGoldTooltip, doc).eq(index).text();
}

function doStatBarGold(doc) {
  $(statbarGold).text($(statbarGold, doc).text());
  $(statbarGoldTooltip).text(partial(eachGoldValue, doc));
}

function newStats(doc, balPos, index) {
  return $(pccB, doc).slice(balPos).eq(index).text();
}

function doBoldText(doc, balPos) {
  $(pccB).slice(balPos).text(partial(newStats, doc, balPos));
}

function disableDepo(depoPos) { // jQuery
  if ($(pccB).eq(depoPos).text() === '0') {
    $(inputDepo).prop(disabled, true);
  }
}

function updateDepoAmount(o, doc) { // jQuery
  if (o.data.amount !== '1') {
    $(depositAmount).val($(depositAmount, doc).val());
  } else {
    $(depositAmount).val('1');
  }
}

function replaceValues(bankSettings, doc, infoBox) {
  doInfoBox(infoBox);
  doStatBarGold(doc);
  doBoldText(doc, bankSettings.balPos);
  disableDepo(bankSettings.depoPos);
  updateDepoAmount(bankSettings, doc);
  $(withdrawAmount).val(bankSettings.initWithdraw);
}

function transResponse(bankSettings, response) { // jQuery
  const doc = createDocument(response);
  const infoBox = $(infoMsg, doc);
  if (infoBox.length === 0) { return; }
  replaceValues(bankSettings, doc, infoBox);
}

function invalidAmount(o, amount) { // jQuery
  return $(pccB).eq(o.depoPos).text() === '0'
    || !$.isNumeric(amount) || amount < 1;
}

function doAjax(bankSettings) {
  indexAjaxData(bankSettings.data).then(partial(transResponse, bankSettings));
}

function bankDeposit(bankSettings, e) { // jQuery
  e.preventDefault();
  const amount = $(depositAmount).val();
  if (invalidAmount(bankSettings, amount)) { return; }
  // eslint-disable-next-line no-param-reassign
  bankSettings.data.mode = 'deposit';
  // eslint-disable-next-line no-param-reassign
  bankSettings.data.amount = amount;
  doAjax(bankSettings);
}

function bankWithdrawal(bankSettings, e) { // jQuery
  e.preventDefault();
  const amount = $(withdrawAmount).val();
  if (!$.isNumeric(amount) || amount < 1) { return; }
  // eslint-disable-next-line no-param-reassign
  bankSettings.data.mode = 'withdraw';
  // eslint-disable-next-line no-param-reassign
  bankSettings.data.amount = amount;
  doAjax(bankSettings);
}

function linkToGuildBank(bankSettings) { // jQuery
  if (bankSettings.appLink) {
    $('#pCC').append(`<div class="fshCenter"><a href="${
      guildSubcmdUrl}bank">Go to Guild Bank</a></div>`);
  }
}

function captureButtons(bankSettings, depo, withdraw) { // jQuery
  if ($(pccB).eq(bankSettings.depoPos).text() === '0') { // Check Deposits Available
    depo.prop(disabled, true);
  } else {
    depo.on('click', partial(bankDeposit, bankSettings));
  }
  withdraw.on('click', partial(bankWithdrawal, bankSettings));
}

function appLink(bankSettings) { // jQuery
  linkToGuildBank(bankSettings);
  const depo = $(inputDepo);
  if (depo.length !== 1) { return; }
  const withdraw = $('#pCC input[value="Withdraw"]');
  if (withdraw.length !== 1) { return; }
  captureButtons(bankSettings, depo, withdraw);
}

function hasJquery(bankSettings) { // jQuery
  const bank = $(bankSettings.headSelector);
  if (bank.length !== 0 && bank.eq(0).text() === bankSettings.headText) {
    appLink(bankSettings);
  }
}

export default function ajaxifyBank(bankSettings) {
  if (jQueryPresent()) { hasJquery(bankSettings); }
}
