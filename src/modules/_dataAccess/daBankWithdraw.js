import $dataAccess from './$dataAccess';
import bank from '../app/bank';

export default function daBankWithdraw(amount) {
  return $dataAccess(bank, bank, 'withdraw', amount);
}
