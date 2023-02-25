import indexAjaxDoc from '../ajax/indexAjaxDoc';
import sendEvent from '../analytics/sendEvent';
import createDiv from '../common/cElement/createDiv';
import closestTable from '../common/closestTable';
import getElementById from '../common/getElementById';
import getText from '../common/getText';
import onclick from '../common/onclick';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import setText from '../dom/setText';
import { guildSubcmdUrl } from '../support/constants';
import { pcc } from '../support/layout';

const withdrawAmount = '#pCC #withdraw_amount';
const depositAmount = '#pCC #deposit_amount';
const inputDepo = '#pCC input[value="Deposit"]';

function doInfoBox(infoBox) {
  const target = getElementById('info-msg');
  if (target) {
    closestTable(target).replaceWith(infoBox);
  } else {
    pcc().prepend(infoBox);
  }
}

function updateNodeArray(query, doc) {
  const newDoc = querySelectorArray(query, doc);
  querySelectorArray(query).forEach((e, i) => {
    setText(getText(newDoc[i]), e);
  });
}

function disableDepo(depoPos) {
  const remainingDepos = getText(querySelectorArray('#pCC b')[depoPos]);
  if (remainingDepos === '0') {
    querySelector(inputDepo).disabled = true;
  }
}

function getAmount(mode, doc = document) {
  const query = mode === 'deposit' ? depositAmount : withdrawAmount;
  return querySelector(query, doc).value;
}

function updateDepoAmount(doc) {
  const oldDepo = Number(getAmount('deposit'));
  const newDepo = Number(getAmount('deposit', doc));
  if (newDepo < oldDepo) {
    querySelector(depositAmount).value = newDepo;
  }
}

function updateValues(bankSettings, doc, infoBox) {
  doInfoBox(infoBox);
  updateDepoAmount(doc);
  querySelector(withdrawAmount).value = bankSettings.initWithdraw;
  updateNodeArray('#statbar-gold, #statbar-gold-tooltip dd, #pCC b', doc);
  disableDepo(bankSettings.depoPos);
}

async function doAjax(bankSettings, mode, amount) {
  const doc = await indexAjaxDoc({ ...bankSettings.data, mode, amount });
  const infoMsg = getElementById('info-msg', doc);
  if (infoMsg) {
    updateValues(bankSettings, doc, closestTable(infoMsg));
  }
}

function handleBankAction(bankSettings, mode, e) {
  e.preventDefault();
  sendEvent('bank', mode);
  doAjax(bankSettings, mode, getAmount(mode));
}

function linkToGuildBank(bankSettings) {
  if (bankSettings.appLink) {
    pcc().append(createDiv({
      classList: 'fshCenter',
      innerHTML: `<a href="${guildSubcmdUrl}bank">Go to Guild Bank</a>`,
    }));
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
  const withdraw = querySelector('#pCC input[value="Withdraw"]');
  if (withdraw && depo) {
    captureButtons(bankSettings, depo, withdraw);
  }
}

export default function ajaxifyBank(bankSettings) {
  const bank = querySelector(bankSettings.headSelector);
  if (bank && getText(bank) === bankSettings.headText) {
    appLink(bankSettings);
  }
}
