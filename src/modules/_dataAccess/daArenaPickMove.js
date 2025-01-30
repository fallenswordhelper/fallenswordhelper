import dopickmove from '../app/arena/dopickmove';
import $dataAccess from './$dataAccess';
import arenaPickMove from './fallbacks/arenaPickMove';

export default function daArenaPickMove(moveId, slotId) {
  return $dataAccess(dopickmove, arenaPickMove, moveId, slotId);
}
