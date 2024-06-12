import trade from './trade';

export default function sendgold(playerName, amount) {
  return trade({
    subcmd: 'sendgold',
    xc: window.ajaxXC,
    target_username: playerName,
    gold_amount: amount,
  });
}
