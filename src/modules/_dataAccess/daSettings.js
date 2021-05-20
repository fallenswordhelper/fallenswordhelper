import $dataAccess from './_dataAccess';
import settings from '../app/settings';
import settingsFallback from './fallbacks/settings';

export default function daSettings() {
  return $dataAccess(settings, settingsFallback);
}
