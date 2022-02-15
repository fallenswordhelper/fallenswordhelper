import $dataAccess from './$dataAccess';
import bank from '../app/bank';
import { fallback } from './fallbacks/bank';

export default function daBankWithdraw(amount) {
  return $dataAccess(bank, fallback, 'withdraw', amount);
}
