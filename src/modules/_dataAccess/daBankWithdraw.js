import indexAjaxDoc from '../ajax/indexAjaxDoc';
import infoBox from '../common/infoBox';
import withdraw from '../app/bank/withdraw';
import $dataAccess from './$dataAccess';
import hData from './fallbacks/hData/hData';

async function withdrawFallback(amount) {
  const doc = await indexAjaxDoc({
    cmd: 'bank',
    subcmd: 'transaction',
    mode: 'withdraw',
    amount,
  });
  if (!doc) return { s: false };
  const info = infoBox(doc);
  if (info === 'You successfully withdrew gold!') {
    return {
      s: true,
      h: hData(doc, { player: ['gold', 'bank'] }),
    };
  }
  return { e: { message: info }, s: false };
}

export default function daBankWithdraw(amount) {
  return $dataAccess(withdraw, withdrawFallback, amount);
}
