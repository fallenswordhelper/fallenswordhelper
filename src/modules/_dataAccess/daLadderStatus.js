import $dataAccess from './_dataAccess';
import ladderStatus from '../ladder/ladderStatus';
import ladderStatusFallback from '../ladder/ladderStatusFallback';

export default function daToggleLadder() {
  return $dataAccess(ladderStatus, ladderStatusFallback);
}
