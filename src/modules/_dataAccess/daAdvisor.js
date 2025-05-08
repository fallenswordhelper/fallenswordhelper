import advisorView from '../app/guild/advisorView';
import $dataAccess from './$dataAccess';
import viewAdvisor from './fallbacks/viewAdvisor';

export default function daAdvisor(period) {
  return $dataAccess(advisorView, viewAdvisor, period);
}
