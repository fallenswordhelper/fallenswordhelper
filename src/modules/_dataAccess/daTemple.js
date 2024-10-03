import temple from '../app/temple/temple';
import $dataAccess from './$dataAccess';
import fallback from './fallbacks/temple';

export default function daTemple() {
  return $dataAccess(temple, fallback);
}
