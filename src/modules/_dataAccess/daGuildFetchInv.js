import appFetchinv from '../app/guild/fetchinv';
import $dataAccess from './$dataAccess';
import guildFetchInv from './fallbacks/guildFetchInv';

export default function daGuildFetchInv() {
  return $dataAccess(appFetchinv, guildFetchInv);
}
