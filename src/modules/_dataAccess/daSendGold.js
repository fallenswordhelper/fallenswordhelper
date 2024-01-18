import sendgold from '../app/trade/sendgold';
import $dataAccess from './$dataAccess';
import fallback from './fallbacks/sendgold';

export default function daSendGold(playerName, amount) {
  return $dataAccess(sendgold, fallback, playerName, amount);
}
