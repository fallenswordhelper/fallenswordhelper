import indexAjaxDoc from '../ajax/indexAjaxDoc';
import infoBox from '../common/infoBox';
import withdraw from '../app/guild/bank/withdraw';
import $dataAccess from './$dataAccess';
import hData from './fallbacks/hData/hData';

async function withdrawFallback(amount) {
  const doc = await indexAjaxDoc({
    cmd: 'guild',
    subcmd: 'bank',
    subcmd2: 'transaction',
    mode: 'withdraw',
    amount,
  });
  if (!doc) return { s: false };
  const info = infoBox(doc);
  if (info === 'You successfully withdrew gold from the guild!') {
    return {
      s: true,
      h: hData(doc, { player: [ 'gold'  ], guild: [ 'bank' ] }),
    };
  }
  return { e: { message: info }, s: false };
}
export default function daGuildBankWithdraw(amount) {
  return $dataAccess(withdraw, withdrawFallback, amount);
}
