import skill from '../app/settings/skill';
import $dataAccess from './$dataAccess';
import fallback from './fallbacks/skill';

export default function daSkills(level, blocked) {
  return $dataAccess(skill, fallback, level, blocked);
}
