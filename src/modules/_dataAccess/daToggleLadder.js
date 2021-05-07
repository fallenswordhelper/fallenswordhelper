import $dataAccess from './_dataAccess';
import toggle from '../ladder/toggle';
import toggleFallback from '../ladder/toggleFallback';

export default function daToggleLadder(ladderStatus) {
  return $dataAccess(toggle, toggleFallback, ladderStatus);
}
