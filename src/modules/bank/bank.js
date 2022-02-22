import addCommas from '../system/addCommas';
import createDiv from '../common/cElement/createDiv';
import getText from '../common/getText';
import intValue from '../system/intValue';
import isUndefined from '../common/isUndefined';
import { pCC } from '../support/layout';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';

const errorDiv = createDiv({
  hidden: true,
  style: `
    border: 2px solid #fff;
    margin: 10px auto;
    width: 80%;
    background-color: #D3CFC1;
    text-align: center;
    padding: 2px;
  `,
});
const errorHeader = createDiv({
  style: `
    background-color: #8E8668;
    color: #fff;
    text-transform: capitalize;
  `,
});
errorDiv.append(errorHeader);
errorDiv.append(createDiv());
pCC.prepend(errorDiv);

export function clearError() {
  errorDiv.hidden = true;
}

function showError(message, header = 'INFORMATION') {
  errorDiv.childNodes[0].textContent = header;
  errorDiv.childNodes[1].textContent = message;
  errorDiv.hidden = false;
}

export function toggleSubmit(b) {
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
  const depositInput = querySelector('#deposit_amount');
  const withdrawInput = querySelector('#withdraw_amount');
  depositInput.value = Math.min(parseInt(depositInput.value, 10), newMaxDeposit);
  withdrawInput.value = Math.min(parseInt(withdrawInput.value, 10), newBalance);
}

function getBankDetails() {
  const fields = querySelectorArray('#pCC td > b');
  const wallet = querySelector('#statbar-gold');
  return {
    balance: intValue(getText(fields[0])),
    deposits: Number(getText(fields[1])),
    wallet: intValue(getText(wallet)),
  };
}

function setBankDetails(balance, deposits, cash) {
  const fields = querySelectorArray('#pCC td > b');
  const wallet = querySelector('#statbar-gold');
  const newMaxDeposit = Math.ceil(cash / 4);

  wallet.textContent = addCommas(cash);
  fields[0].textContent = addCommas(balance);
  fields[1].textContent = deposits;
  fields[4].textContent = addCommas(newMaxDeposit);

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

export function handleResponse(response, amount) {
  if (response.s) {
    updateBankDetails(amount);
    return;
  }
  showError(response.e.message);
}
