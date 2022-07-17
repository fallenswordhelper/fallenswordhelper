import { now } from '../../support/now';
import getValue from '../../system/getValue';

export default function doRefreshButton() {
  const lastCheck = getValue('lastOnlineCheck');
  if (now() - lastCheck > 300000) {
    return '<span> (takes a while to refresh so only do it '
      + 'if you really need to) </span><span id="fshRefresh" class="fshLink"'
      + '>[Refresh]</span>';
  }
  return `<span>[ Wait ${Math.round(300 - (now()
    - lastCheck) / 1000)}s ]</span>`;
}
