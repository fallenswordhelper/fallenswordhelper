import $dataAccess from './$dataAccess';
import fallback from './fallbacks/guildBank';
import guildBank from '../app/guildBank';

export default function daGuildBankTransaction(mode, amount) {
  return $dataAccess(guildBank, fallback, mode, amount);
}
