import daBankWithdraw from '../_dataAccess/daBankWithdraw';
import daBankDeposit from '../_dataAccess/daBankDeposit';
import ajaxifyBank from './ajaxifyBank';

export default function injectBank() {
  ajaxifyBank({
    headText: 'Bank',
    appLink: true,
    initWithdraw: '',
    daWithdraw: daBankWithdraw,
    daDeposit: daBankDeposit,
    balanceKey: 'p',
    maxDepoPos: 4,
    depositMessage: 'You successfully deposited gold!',
    withdrawMessage: 'You successfully withdrew gold!',
  });
}
