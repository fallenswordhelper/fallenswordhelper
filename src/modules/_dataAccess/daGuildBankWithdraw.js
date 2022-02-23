import $dataAccess from './$dataAccess';
import fallback from './fallbacks/guildBank';
import guildBank from '../app/guildBank';

export default function daGuildBankWithdraw(amount) {
  return $dataAccess(guildBank, fallback, 'withdraw', amount);
}
