import daBankDeposit from '../_dataAccess/daBankDeposit';
import daBankWithdraw from '../_dataAccess/daBankWithdraw';
import on from '../common/on';
import submitBank from './submitBank';

export default function injectBank() {
  on(document.forms.depositForm, 'submit', submitBank(daBankDeposit));
  on(document.forms.withdrawForm, 'submit', submitBank(daBankWithdraw));
}
