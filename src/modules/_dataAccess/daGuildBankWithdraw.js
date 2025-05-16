import indexAjaxDoc from '../ajax/indexAjaxDoc';
import infoBox from '../common/infoBox';
import withdraw from '../app/guild/bank/withdraw';
import $dataAccess from './$dataAccess';
import gold from './fallbacks/gold';
import guildBank from './fallbacks/guildBank';

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
      h: {
        p: [ gold(doc) ],
        g: [ guildBank(doc) ]
      },
    };
  }
  return { e: { message: info }, s: false };
}
export default function daGuildBankWithdraw(amount) {
  return $dataAccess(withdraw, withdrawFallback, amount);
}
