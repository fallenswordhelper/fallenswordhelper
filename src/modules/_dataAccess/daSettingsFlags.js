import flags from '../app/settings/flags';
import $dataAccess from './$dataAccess';
import settingsFlags from './fallbacks/settingsFlags';

export default function daSettingsFlags(flagsArray) {
  return $dataAccess(flags, settingsFlags, flagsArray);
}
