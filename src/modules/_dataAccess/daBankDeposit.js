import $dataAccess from './$dataAccess';
import bank from '../app/bank';

export default function daBankDeposit(amount) {
  return $dataAccess(bank, bank, 'deposit', amount);
}
