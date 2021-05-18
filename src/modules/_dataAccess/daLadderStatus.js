import $dataAccess from './_dataAccess';
import ladderStatus from '../ladder/ladderStatus';
import ladderStatusFallback from './fallbacks/ladderStatus';

export default function daToggleLadder() {
  return $dataAccess(ladderStatus, ladderStatusFallback);
}
