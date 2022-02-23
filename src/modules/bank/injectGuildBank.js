import daGuildBankDeposit from '../_dataAccess/daGuildBankDeposit';
import daGuildBankWithdraw from '../_dataAccess/daGuildBankWithdraw';
import on from '../common/on';
import submitBank from './submitBank';

export default function injectGuildBank() {
  on(document.forms.depositForm, 'submit', submitBank(daGuildBankDeposit));
  on(document.forms.withdrawForm, 'submit', submitBank(daGuildBankWithdraw));
}
