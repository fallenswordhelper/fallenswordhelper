import $dataAccess from './$dataAccess';
import appGuildManage from '../app/guild/manage';
import guildManage from './fallbacks/guildManage';

export default function daGuildManage() {
  const bugged = 1;
  if (bugged) {
    return guildManage();
  }
  return $dataAccess(appGuildManage, guildManage);
}
