import $dataAccess from './$dataAccess';
import appGuildView from '../app/guild/view';
import guildView from './fallbacks/guildView';

export default function daGuildView(guildId) {
  return $dataAccess(appGuildView, guildView, guildId);
}
