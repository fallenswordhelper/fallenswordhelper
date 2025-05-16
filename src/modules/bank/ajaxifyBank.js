import sendEvent from '../analytics/sendEvent';
import createDiv from '../common/cElement/createDiv';
import closestTable from '../common/closestTable';
import getElementById from '../common/getElementById';
import getText from '../common/getText';
import onclick from '../common/onclick';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import setText from '../dom/setText';
import { guildSubcmdUrl } from '../support/constants';
import { pcc } from '../support/layout';
import createInfoBox from '../common/createInfoBox';
import setTextCommas from '../common/setTextCommas';
import addCommas from '../system/addCommas';

const withdrawAmount = '#pCC #withdraw_amount';
const depositAmount = '#pCC #deposit_amount';
const inputDepo = '#pCC input[value="Deposit"]';

const bankTable = (context=document) => closestTable(querySelector(inputDepo, context));

function doInfoBox(message) {
  const target = getElementById('info-msg');
  if (target) {
    setText(message, target);
  } else {
    setText(message, querySelector('#info-msg', createInfoBox()));
  }
}

const depoElement = () => querySelector(
  'b',
  querySelector('tr:nth-child(2)', bankTable()),
);
function updateDeposLeft() {
  const remainingDepos = Number(getText(depoElement()));
  setText(
    Math.max(0, remainingDepos - 1),
    depoElement(),
  );
  disableDepo();
}

function disableDepo() {
  const remainingDepos = getText(depoElement());
  if (remainingDepos === '0') {
    querySelector(inputDepo).disabled = true;
  }
}

function getAmount(mode, doc = document) {
  const query = mode === 'deposit' ? depositAmount : withdrawAmount;
  return querySelector(query, doc).value;
}

function updateDepoAmount(walletBalance, bankSettings) {
  const newDepo = Math.ceil(walletBalance * 0.25);
  $('#depositSlider').slider('option', 'max', newDepo);
  const maxDepoElement = querySelector(
    'b',
    querySelector(`tr:nth-child(${bankSettings.maxDepoPos})`,bankTable()),
  );
  setTextCommas(newDepo, maxDepoElement);
  const oldDepo = Number(getAmount('deposit'));
  if (newDepo < oldDepo) {
    querySelector(depositAmount).value = newDepo;
  }
}

function updateWalletBalance(walletBalance) {
  const balanceString = addCommas(walletBalance);
  setText(balanceString, querySelector('#statbar-gold'));
  setText(balanceString, querySelector('.stat-gold + dd'));
}

function updateBankBalance(bankBalance) {
  const balanceString = addCommas(bankBalance);
  setText(balanceString, querySelector('.stat-bank +dd'));
  setText(balanceString, querySelector('tr b', bankTable()));
  $('#withdrawSlider').slider('option', 'max', bankBalance);
}

function updateValues(bankSettings, response, infoBox) {
  doInfoBox(infoBox);
  const walletBalance = response.h.p.find((i) => i.k === 0).v;
  updateDepoAmount(walletBalance, bankSettings);
  updateWalletBalance(walletBalance);

  const bankBalance = response.h[bankSettings.balanceKey.h]
    .find((i) => i.k === bankSettings.balanceKey.k)
    .v;
  updateBankBalance(bankBalance);
  updateDeposLeft();

  querySelector(withdrawAmount).value = bankSettings.initWithdraw;
}

async function doAjax(bankSettings, mode, amount) {
  const daFunction = mode === 'deposit'
    ? bankSettings.daDeposit
    : bankSettings.daWithdraw;
  const response = await daFunction(amount);
  if (response?.s) {
    const message = mode === 'deposit'
      ? bankSettings.depositMessage
      : bankSettings.withdrawMessage;
    updateValues(bankSettings, response, message);
  } else {
    doInfoBox(response?.e?.message ?? 'Server error');
  }
}

function handleBankAction(bankSettings, mode, e) {
  e.preventDefault();
  sendEvent('bank', mode);
  doAjax(bankSettings, mode, getAmount(mode));
}

function linkToGuildBank(bankSettings) {
  if (bankSettings.appLink) {
    pcc().append(
      createDiv({
        classList: 'fshCenter',
        innerHTML: `<a href="${guildSubcmdUrl}bank">Go to Guild Bank</a>`,
      }),
    );
  }
}

function captureButtons(bankSettings, depo, withdraw) {
  disableDepo();
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
  const bank = querySelector('#pCC h2, #pCC b');
  if (bank && getText(bank) === bankSettings.headText) {
    appLink(bankSettings);
  }
}
