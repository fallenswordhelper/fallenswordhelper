import indexAjaxData from '../ajax/indexAjaxData';
import querySelector from '../common/querySelector';
import sendEvent from '../analytics/sendEvent';

function getValue(field, scope) {
  const element = querySelector(`input[name="${field}"]`, scope);
  return element.value;
}

async function getSettings() {
  const settingsHTML = await indexAjaxData({ cmd: 'settings' });
  const settingsPage = document.createElement('html');
  settingsPage.innerHTML = settingsHTML;

  const settings = {
    min_group_level: getValue('min_group_level', settingsPage),
    ca_default: getValue('ca_default', settingsPage),
    sc_default: getValue('sc_default', settingsPage),
    nv_default: getValue('nv_default', settingsPage),
    barricade_default: getValue('barricade_default', settingsPage),
    pvp_ladder: querySelector('#pvp-opt-in', settingsPage).checked,
  };

  return settings;
}

export default async function toggleFallback(ladderStatus) {
  sendEvent('ladder', 'toggle');
  const settings = await getSettings();
  settings.pvp_ladder = ladderStatus ? 1 : 0;

  const response = await indexAjaxData({
    cmd: 'settings',
    subcmd: 'save',
    ...settings,
  });
  return response;
}
