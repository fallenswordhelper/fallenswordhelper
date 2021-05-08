import $dataAccess from './_dataAccess';
import toggle from '../ladder/toggle';
import toggleLadder from './fallbacks/toggleLadder';

export default function daToggleLadder(ladderStatus) {
  return $dataAccess(toggle, toggleLadder, ladderStatus);
}
