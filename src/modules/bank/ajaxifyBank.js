import indexAjaxData from '../ajax/indexAjaxData';
import createDiv from '../common/cElement/createDiv';
import closestTable from '../common/closestTable';
import getElementById from '../common/getElementById';
import getText from '../common/getText';
import onclick from '../common/onclick';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import setInnerHtml from '../dom/setInnerHtml';
import setText from '../dom/setText';
import { guildSubcmdUrl } from '../support/constants';
import { pcc } from '../support/layout';
import createDocument from '../system/createDocument';

const withdrawAmount = '#pCC #withdraw_amount';
const depositAmount = '#pCC #deposit_amount';
const inputDepo = '#pCC input[value="Deposit"]';

function pccB(doc = document) {
  return querySelectorArray('#pCC b', doc);
}

function doInfoBox(infoBox) {
  const target = getElementById('info-msg');
  if (target) {
    closestTable(target).replaceWith(infoBox);
  } else {
    pcc().prepend(closestTable(infoBox));
  }
}

function updateNodeArray(query, doc) {
  const newDoc = querySelectorArray(query, doc);
  querySelectorArray(query).forEach((e, i) => {
    setText(getText(newDoc[i]), e);
  });
}

function doStatBarGold(doc) {
  updateNodeArray('#statbar-gold', doc);
  updateNodeArray('#statbar-gold-tooltip dd', doc);
}

function doBoldText(doc) {
  updateNodeArray('#pCC b', doc);
}

function disableDepo(depoPos) {
  if (getText(pccB()[depoPos]) === '0') {
    querySelector(inputDepo).disabled = true;
  }
}

function updateDepoAmount(o, doc) {
  const depo = querySelector(depositAmount);
  if (o.data.amount !== '1') {
    depo.value = querySelector(depositAmount, doc).value;
  } else {
    depo.value = 1;
  }
}

function replaceValues(bankSettings, doc, infoBox) {
  doInfoBox(infoBox);
  doStatBarGold(doc);
  doBoldText(doc);
  disableDepo(bankSettings.depoPos);
  updateDepoAmount(bankSettings, doc);
  querySelector(withdrawAmount).value = bankSettings.initWithdraw;
}

function transResponse(bankSettings, response) { // jQuery
  const doc = createDocument(response);
  const infoMsg = getElementById('info-msg', doc);
  if (infoMsg) {
    replaceValues(bankSettings, doc, closestTable(infoMsg));
  }
}

function doAjax(bankSettings, mode, amount) {
  indexAjaxData({ ...bankSettings.data, mode, amount })
    .then(partial(transResponse, bankSettings));
}

function getAmount(mode) {
  const query = mode === 'deposit' ? depositAmount : withdrawAmount;
  return querySelector(query).value;
}

function handleBankAction(bankSettings, mode, e) {
  e.preventDefault();
  doAjax(bankSettings, mode, getAmount(mode));
}

function linkToGuildBank(bankSettings) {
  if (bankSettings.appLink) {
    const div = createDiv();
    setInnerHtml(`<div class="fshCenter"><a href="${
      guildSubcmdUrl}bank">Go to Guild Bank</a></div>`, div);
    pcc().append(div);
  }
}

function captureButtons(bankSettings, depo, withdraw) {
  disableDepo(bankSettings.depoPos);
  onclick(depo, partial(handleBankAction, bankSettings, 'deposit'));
  onclick(withdraw, partial(handleBankAction, bankSettings, 'withdraw'));
}

function appLink(bankSettings) {
  linkToGuildBank(bankSettings);
  const depo = querySelector(inputDepo);
  if (!depo) { return; }
  const withdraw = querySelector('#pCC input[value="Withdraw"]');
  if (withdraw) {
    captureButtons(bankSettings, depo, withdraw);
  }
}

export default function ajaxifyBank(bankSettings) {
  const bank = querySelector(bankSettings.headSelector);
  if (bank && getText(bank) === bankSettings.headText) {
    appLink(bankSettings);
  }
}
