import $dataAccess from './$dataAccess';
import bank from '../app/bank';
import fallback from './fallbacks/bank';

export default function daBankDeposit(amount) {
  return $dataAccess(bank, fallback, 'deposit', amount);
}
