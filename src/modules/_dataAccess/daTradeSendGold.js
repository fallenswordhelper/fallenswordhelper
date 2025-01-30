import sendgold from '../app/trade/sendgold';
import $dataAccess from './$dataAccess';
import tradeSendGold from './fallbacks/tradeSendGold';

export default function daTradeSendGold(playerName, amount) {
  return $dataAccess(sendgold, tradeSendGold, playerName, amount);
}
