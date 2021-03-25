import $dataAccess from './_dataAccess';
import appGuildManage from '../app/guild/manage';
import guildManage from './fallbacks/guildManage';

export default function daGuildManage() {
  return $dataAccess(appGuildManage, guildManage);
}
