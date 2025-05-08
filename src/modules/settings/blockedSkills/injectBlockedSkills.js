import { mount } from 'svelte';
import getElementById from '../../common/getElementById';
import once from '../../common/once';
import querySelector from '../../common/querySelector';
import getUrlParameter from '../../system/getUrlParameter';
import BlockedSkills from './BlockedSkills.svelte';
import doTickAll from './doTickAll';

let app = false;

function startApp() {
  if (!app) {
    app = mount(BlockedSkills, {
      target: getElementById('settingsTabs-4'),
    });
    doTickAll();
  }
  return app;
}

export default function injectBlockedSkills() {
  if (getUrlParameter('tab') === '3') {
    startApp();
  } else {
    const tab = querySelector('li[aria-controls="settingsTabs-4"]');
    const link = querySelector('a[href="#settingsTabs-4"]');
    once(tab, 'focus', startApp);
    once(link, 'click', startApp);
  }
}
