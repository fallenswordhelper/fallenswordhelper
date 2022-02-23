import addCommas from '../system/addCommas';
import getElementById from '../common/getElementById';
import getText from '../common/getText';
import intValue from '../system/intValue';
import isUndefined from '../common/isUndefined';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import { clearError, showError } from './error';

function getDepositAmount() {
  const input = getElementById('deposit_amount');
  return Number(input.value);
}

function getWithdrawAmount() {
  const input = getElementById('withdraw_amount');
  return Number(input.value);
}

function toggleSubmit(b) {
  const depositButton = querySelector('input[value="Deposit"]');
  const withdrawButton = querySelector('input[value="Withdraw"]');

  if (isUndefined(b)) {
    // eslint-disable-next-line no-param-reassign
    b = !withdrawButton.disabled;
  }

  withdrawButton.disabled = b;
  depositButton.disabled = b;
}

function updateInputs(newMaxDeposit, newBalance) {
  const depositInput = getElementById('deposit_amount');
  const withdrawInput = getElementById('withdraw_amount');
  depositInput.value = Math.min(getDepositAmount(), newMaxDeposit);
  withdrawInput.value = Math.min(getWithdrawAmount(), newBalance);
}

function getBankDetails() {
  const fields = querySelectorArray('#pCC td:first-child table b');
  const walletNode = getElementById('statbar-gold');
  return {
    balance: {
      node: fields[0],
      value: intValue(getText(fields[0])),
    },
    deposits: {
      node: fields[1],
      value: Number(getText(fields[1])),
    },
    wallet: {
      node: walletNode,
      value: intValue(getText(walletNode)),
    },
  };
}

function updateBankDetails(amountChange) {
  const bank = getBankDetails();
  const newBalance = bank.balance.value + amountChange;

  updateInputs(
    Math.ceil((bank.balance.value + amountChange) / 4),
    newBalance,
  );

  bank.balance.node.textContent = addCommas(newBalance);
  bank.wallet.node.textContent = addCommas(bank.wallet.value - amountChange);
  if (amountChange > 0) {
    bank.deposits.node.textContent = bank.deposits.value - (amountChange > 0);
  }
}

function handleResponse(response, amount) {
  if (response.s) {
    updateBankDetails(amount);
    return;
  }
  showError(response.e.message);
}

export default function submitBank(fn) {
  return async (e) => {
    e.preventDefault();
    toggleSubmit(true);
    clearError();

    const amount = e.target.amount.value;
    const mode = e.target.mode.value;
    const response = await fn(amount);
    handleResponse(response, amount * (mode === 'deposit' ? 1 : -1));

    toggleSubmit(false);
  };
}
