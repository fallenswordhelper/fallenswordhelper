import $dataAccess from './_dataAccess';
import settingsView from './fallbacks/settingsView';
import view from '../app/settings/view';

export default function daSettingsView() {
  return $dataAccess(view, settingsView);
}
