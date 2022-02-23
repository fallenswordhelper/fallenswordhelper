import $dataAccess from './$dataAccess';
import fallback from './fallbacks/guildBank';
import guildBank from '../app/guildBank';

export default function daGuildBankDeposit(amount) {
  return $dataAccess(guildBank, fallback, 'deposit', amount);
}
