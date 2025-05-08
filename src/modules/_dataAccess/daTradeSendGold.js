import sendgold from '../app/trade/sendgold';
import $dataAccess from './$dataAccess';
import aGenericFallback from './fallbacks/aGenericFallback';

function tradeSendGold(playerName, amount) {
  return aGenericFallback(
    {
      cmd: 'trade',
      subcmd: 'sendgold',
      xc: window.ajaxXC,
      target_username: playerName,
      gold_amount: amount,
    },
    'You successfully sent gold!',
  );
}

export default function daTradeSendGold(playerName, amount) {
  return $dataAccess(sendgold, tradeSendGold, playerName, amount);
}
