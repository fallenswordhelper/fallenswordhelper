import contrib from '../app/globalquests/contrib';
import $dataAccess from './$dataAccess';
import globalContrib from './fallbacks/globalContrib';

export default function daGlobalContrib() {
  return $dataAccess(contrib, globalContrib);
}
