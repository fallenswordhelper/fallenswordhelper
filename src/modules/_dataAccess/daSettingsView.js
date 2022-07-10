import view from '../app/settings/view';
import $dataAccess from './$dataAccess';
import settingsView from './fallbacks/settingsView';

export default function daSettingsView() {
  return $dataAccess(view, settingsView);
}
