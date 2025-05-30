import $dataAccess from './$dataAccess';
import profile from '../app/profile/profile';

export default function daProfile() {
  return $dataAccess(profile, () => {});
}
