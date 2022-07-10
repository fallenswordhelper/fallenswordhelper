import appViewCombat from '../app/combat/view';
import $dataAccess from './$dataAccess';
import viewCombat from './fallbacks/viewCombat';

export default function daViewCombat(id) {
  return $dataAccess(appViewCombat, viewCombat, id);
}
