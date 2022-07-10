import on from '../../common/on';
import onclick from '../../common/onclick';
import querySelector from '../../common/querySelector';
import getUrlParameter from '../../system/getUrlParameter';
import BlockedSkills from './BlockedSkills.svelte';

let app = false;

function startApp() {
  if (!app) {
    app = new BlockedSkills({
      target: document.getElementById('settingsTabs-4'),
    });
  }
  return app;
}

export default function injectBlockedSkills() {
  if (getUrlParameter('tab') === '3') {
    startApp();
  } else {
    const tab = querySelector('li[aria-controls="settingsTabs-4"]');
    const link = querySelector('a[href="#settingsTabs-4"]');
    on(tab, 'focus', startApp, { once: true });
    onclick(link, startApp, { once: true });
  }
}
