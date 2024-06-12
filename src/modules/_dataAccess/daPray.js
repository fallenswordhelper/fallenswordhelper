import pray from '../app/temple/pray';
import $dataAccess from './$dataAccess';
import fallback from './fallbacks/pray';

export default function daPray(myGod) {
  return $dataAccess(pray, fallback, myGod);
}
