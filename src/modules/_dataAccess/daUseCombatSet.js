import $dataAccess from './$dataAccess';
import useCombatSet from './fallbacks/useCombatSet';
import usecombatset from '../app/profile/usecombatset';

export default function daUseCombatSet(combatSetId) {
  return $dataAccess(usecombatset, useCombatSet, combatSetId);
}
