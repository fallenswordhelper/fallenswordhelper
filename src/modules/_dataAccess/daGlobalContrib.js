import $dataAccess from './$dataAccess';
import contrib from '../app/globalquests/contrib';
import globalContrib from './fallbacks/globalContrib';

export default function daGlobalContrib() {
  return $dataAccess(contrib, globalContrib);
}
