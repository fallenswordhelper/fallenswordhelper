import $dataAccess from './_dataAccess';
import ladderStatus from '../ladder/ladderStatus';
// eslint-disable-next-line import/no-named-as-default-member, import/no-named-as-default
import ladderStatusFallback from './fallbacks/ladderStatus';

export default function daToggleLadder() {
  return $dataAccess(ladderStatus, ladderStatusFallback);
}
