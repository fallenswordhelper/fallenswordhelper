import $dataAccess from './_dataAccess';
import appViewProfile from '../app/profile/view';
import viewProfile from './fallbacks/viewProfile';

export default function daViewProfile() {
  return $dataAccess(appViewProfile, viewProfile);
}
