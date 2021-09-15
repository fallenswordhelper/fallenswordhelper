import $dataAccess from './$dataAccess';
import debuff from './fallbacks/debuff';
import removeskill from '../app/profile/removeskill';

export default function daRemoveSkill(buffId) {
  return $dataAccess(removeskill, debuff, buffId);
}
