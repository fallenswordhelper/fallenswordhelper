import $dataAccess from './_dataAccess';
import setFlags from '../app/setFlags';

export default function daSetFlags(flags) {
  return $dataAccess(setFlags, () => {}, flags);
}
