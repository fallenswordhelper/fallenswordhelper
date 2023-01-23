import getElementById from '../common/getElementById';
import once from '../common/once';
import injectBlockedSkills from './blockedSkills/injectBlockedSkills';
import Settings from './Settings.svelte';

function addTab(tabs) { // jQuery
  tabs.find('.ui-tabs-nav')
    .append('<li><a href="#fshSettings">FSH</a></li>');
  tabs.append('<div id="fshSettings"></div>');
  tabs.tabs('refresh');
}

const startApp = (target) => new Settings({ target });

export default function injectSettings() { // jQuery
  const settingsTabs = $('#settingsTabs');
  addTab(settingsTabs);
  const tabsInstance = settingsTabs.tabs('instance');
  if (tabsInstance) {
    once(
      getElementById('ui-id-9'),
      'click',
      () => startApp(getElementById('fshSettings')),
    );
  }
  injectBlockedSkills();
}
