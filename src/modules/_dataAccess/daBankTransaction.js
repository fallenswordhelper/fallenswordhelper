import $dataAccess from './$dataAccess';
import bank from '../app/bank';
import fallback from './fallbacks/bank';

export default function daBankTransaction(mode, amount) {
  return $dataAccess(bank, fallback, mode, amount);
}
