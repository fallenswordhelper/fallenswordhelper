import jQueryNotPresent from '../common/jQueryNotPresent';
import querySelector from '../common/querySelector';
import calf from '../support/calf';
import setValue from '../system/setValue';
import injectBlockedSkills from './blockedSkills/injectBlockedSkills';
import setupConfigData from './configData';
import createEventListeners from './createEventListeners';
import getVars from './getVars';

function addTab(tabs) { // jQuery
  tabs.find('.ui-tabs-nav')
    .append('<li><a href="#fshSettings">FSH</a></li>');
  tabs.append(`<div id="fshSettings"><p>${calf.configData}</p></div>`);
  tabs.tabs('refresh');
}

function doFshSettings(settingsTabs) {
  getVars();
  setupConfigData();
  addTab(settingsTabs);
  createEventListeners();
  setValue('minGroupLevel', querySelector('input[name="min_group_level"]').value);
}

export default function injectSettings() { // jQuery
  if (jQueryNotPresent()) { return; }
  const settingsTabs = $('#settingsTabs');
  const tabsInstance = settingsTabs.tabs('instance');
  if (tabsInstance) { doFshSettings(settingsTabs); }
  injectBlockedSkills();
}
