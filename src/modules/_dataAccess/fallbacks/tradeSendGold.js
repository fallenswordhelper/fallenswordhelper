import aGenericFallback from './aGenericFallback';

export default async function tradeSendGold(playerName, amount) {
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
