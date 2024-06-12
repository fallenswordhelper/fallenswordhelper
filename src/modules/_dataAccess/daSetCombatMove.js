import setCombatMove from '../app/arena/setCombatMove';
import $dataAccess from './$dataAccess';
import fallback from './fallbacks/setCombatMove';

export default function daSetCombatMove(moveId, slotId) {
  return $dataAccess(setCombatMove, fallback, moveId, slotId);
}
