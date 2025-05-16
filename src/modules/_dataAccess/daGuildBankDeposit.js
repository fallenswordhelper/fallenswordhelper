import indexAjaxDoc from '../ajax/indexAjaxDoc';
import infoBox from '../common/infoBox';
import deposit from '../app/guild/bank/deposit';
import $dataAccess from './$dataAccess';
import hData from './fallbacks/hData/hData';

async function depositFallback(amount) {
  const doc = await indexAjaxDoc({
    cmd: 'guild',
    subcmd: 'bank',
    subcmd2: 'transaction',
    mode: 'deposit',
    amount,
  });
  if (!doc) return { s: false };
  const info = infoBox(doc);
  if (info === 'You successfully deposited gold to the guild!') {
    return {
      s: true,
      h: hData(doc, { player: [ 'gold' ], guild: [ 'bank' ] }),
    };
  }
  return { e: { message: info }, s: false };
}
export default function daGuildBankDeposit(amount) {
  return $dataAccess(deposit, depositFallback, amount);
}
