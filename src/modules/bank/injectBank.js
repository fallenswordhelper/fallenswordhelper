import daBankDeposit from '../_dataAccess/daBankDeposit';
import daBankWithdraw from '../_dataAccess/daBankWithdraw';
import getElementById from '../common/getElementById';
import on from '../common/on';
import { clearError, handleResponse, toggleSubmit } from './bank';

async function deposit(e) {
  e.preventDefault();
  toggleSubmit(true);
  clearError();

  const amount = Number(getElementById('deposit_amount').value);
  const response = await daBankDeposit(amount);
  handleResponse(response, amount);

  toggleSubmit(false);
}

async function withdraw(e) {
  e.preventDefault();
  toggleSubmit(true);
  clearError();

  const amount = Number(getElementById('withdraw_amount').value);
  const response = await daBankWithdraw(amount);
  handleResponse(response, -amount);

  toggleSubmit(false);
}

export default function injectBank() {
  // eslint-disable-next-line prefer-destructuring
  const depositForm = document.forms.depositForm;
  // eslint-disable-next-line prefer-destructuring
  const withdrawForm = document.forms.withdrawForm;
  on(depositForm, 'submit', deposit);
  on(withdrawForm, 'submit', withdraw);
}
