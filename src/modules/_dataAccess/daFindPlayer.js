import $dataAccess from './_dataAccess';
import appFindPlayer from '../app/findplayer';
import findPlayer from './fallbacks/findPlayer';

export default function daFindPlayer(username) {
  return $dataAccess(appFindPlayer, findPlayer, username);
}
