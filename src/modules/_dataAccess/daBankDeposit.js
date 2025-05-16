import indexAjaxDoc from '../ajax/indexAjaxDoc';
import infoBox from '../common/infoBox';
import deposit from '../app/bank/deposit';
import $dataAccess from './$dataAccess';
import gold from './fallbacks/gold';
import bank from './fallbacks/bank';

async function depositFallback(amount) {
  const doc = await indexAjaxDoc({
    cmd: 'bank',
    subcmd: 'transaction',
    mode: 'deposit',
    amount,
  });
  if (!doc) return { s: false };
  const info = infoBox(doc);
  if (info === 'You successfully deposited gold!') {
    return {
      s: true,
      h: { p: [ gold(doc), bank(doc) ] },
    };
  }
  return { e: { message: info }, s: false };
}

export default function daBankDeposit(amount) {
  return $dataAccess(deposit, depositFallback, amount);
}
