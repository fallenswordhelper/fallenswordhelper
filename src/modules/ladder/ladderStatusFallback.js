import indexAjaxData from '../ajax/indexAjaxData';
import querySelector from '../common/querySelector';

export default async function ladderStatus() {
  const settingsHTML = await indexAjaxData({ cmd: 'settings' });
  const settingsPage = document.createElement('html');
  settingsPage.innerHTML = settingsHTML;
  return querySelector('#pvp-opt-in', settingsPage).checked;
}
