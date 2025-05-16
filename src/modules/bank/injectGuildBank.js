import daGuildBankWithdraw from '../_dataAccess/daGuildBankWithdraw';
import daGuildBankDeposit from '../_dataAccess/daGuildBankDeposit';
import ajaxifyBank from './ajaxifyBank';

export default function injectGuildBank() {
  ajaxifyBank({
    headText: 'Guild Bank',
    appLink: false,
    initWithdraw: '1',
    daWithdraw: daGuildBankWithdraw,
    daDeposit: daGuildBankDeposit,
    balanceKey: { h: 'g', k: 10 },
    maxDepoPos: 3,
    depositMessage: 'You successfully deposited gold to the guild!',
    withdrawMessage: 'You successfully withdrew gold from the guild!',
  });
}
