import $dataAccess from './_dataAccess';
import setFlags from '../app/setFlags';
import setFlagsFallback from './fallbacks/setFlags';

export default function daSetFlags(flags) {
  return $dataAccess(setFlags, setFlagsFallback, flags);
}
