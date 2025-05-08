import appScouttower from '../app/guild/scouttower';
import $dataAccess from './$dataAccess';
import scouttower from './fallbacks/scouttower';

export default function daScoutTower() {
  return $dataAccess(appScouttower, scouttower);
}
