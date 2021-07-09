import $dataAccess from './$dataAccess';
import appFetchinv from '../app/guild/fetchinv';
import guildFetchInv from './fallbacks/guildFetchInv';

export default function daGuildFetchInv() {
  return $dataAccess(appFetchinv, guildFetchInv);
}
