import $dataAccess from './$dataAccess';
import doTags from '../app/guild/inventory/doTags';
import guildInvTag from './fallbacks/guildInvTag';

export default function daTagItems(subcmd2, invIdAry) {
  return $dataAccess(doTags, guildInvTag, subcmd2, invIdAry);
}
