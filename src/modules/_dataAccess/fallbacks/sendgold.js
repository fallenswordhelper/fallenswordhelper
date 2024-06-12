import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import infoBox from '../../common/infoBox';

export default async function sendgold(playerName, amount) {
  const doc = await indexAjaxDoc({
    cmd: 'trade',
    subcmd: 'sendgold',
    xc: window.ajaxXC,
    target_username: playerName,
    gold_amount: amount,
  });
  const info = infoBox(doc);
  return { s: info === 'You successfully sent gold!' };
}
