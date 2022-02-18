import ErrorMessage from './ErrorMessage.svelte';
import createDiv from '../common/cElement/createDiv';
import daBankDeposit from '../_dataAccess/daBankDeposit';
import daBankWithdraw from '../_dataAccess/daBankWithdraw';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';

function preventDefault(func) {
  return (e) => { e.preventDefault(); func(); };
}

function parseFormattedInt(str) {
  return parseInt(str.replace(/,/g, ''), 10);
}

function formatInt(i) {
  return i.toLocaleString('En-US');
}

function toggleSubmit(b) {
  const depositButton = querySelector('input[value="Deposit"]');
  const withdrawButton = querySelector('input[value="Withdraw"]');

  if (b === undefined) {
    // eslint-disable-next-line no-param-reassign
    b = !withdrawButton.disabled;
  }

  withdrawButton.disabled = b;
  depositButton.disabled = b;
}

function updateInputs(newMaxDeposit, newBalance) {
  const depositInput = querySelector('#deposit_amount');
  const withdrawInput = querySelector('#withdraw_amount');
  depositInput.value = Math.min(parseInt(depositInput.value, 10), newMaxDeposit);
  withdrawInput.value = Math.min(parseInt(withdrawInput.value, 10), newBalance);
}

function showError(message) {
  const pCC = querySelector('#pCC');
  const target = createDiv();
  pCC.prepend(target);
  return new ErrorMessage({
    props: { message },
    target,
  });
}

function getBankDetails() {
  const fields = querySelectorArray('#pCC td > b');
  const wallet = querySelector('#statbar-gold');
  return {
    balance: parseFormattedInt(fields[0].textContent),
    deposits: parseInt(fields[1].textContent, 10),
    wallet: parseFormattedInt(wallet.textContent),
  };
}

function setBankDetails(balance, deposits, cash) {
  const fields = querySelectorArray('#pCC td > b');
  const wallet = querySelector('#statbar-gold');
  const newMaxDeposit = Math.ceil(cash / 4);

  wallet.textContent = formatInt(cash);
  fields[0].textContent = formatInt(balance);
  fields[1].textContent = deposits;
  fields[4].textContent = formatInt(newMaxDeposit);

  updateInputs(newMaxDeposit, balance);
}

function updateBankDetails(amountChange) {
  const bank = getBankDetails();

  const newBalance = bank.balance + amountChange;
  const newWalletBalance = bank.wallet - amountChange;

  setBankDetails(
    newBalance,
    bank.deposits - (amountChange > 0),
    newWalletBalance,
  );
}

function handleResponse(response, amount) {
  querySelectorArray('#fsh-error-message').forEach((e) => e.remove());
  if (response.s) {
    updateBankDetails(amount);
    return;
  }
  showError(response.e.message);
}

async function deposit() {
  toggleSubmit(true);

  const amount = parseInt(querySelector('#deposit_amount').value, 10);
  const response = await daBankDeposit(amount);
  handleResponse(response, amount);

  toggleSubmit(false);
}

async function withdraw() {
  toggleSubmit(true);

  const amount = parseInt(querySelector('#withdraw_amount').value, 10);
  const response = await daBankWithdraw(amount);
  handleResponse(response, -amount);

  toggleSubmit(false);
}

export default function injectBank() {
  const depositForm = querySelector('form[name="depositForm"]');
  const withdrawForm = querySelector('form[name="withdrawForm"]');
  depositForm.onsubmit = preventDefault(deposit);
  withdrawForm.onsubmit = preventDefault(withdraw);
}
