import calf from '../support/calf';
import createEventListeners from './createEventListeners';
import getVars from './getVars';
import injectBlockedSkills from './injectBlockedSkills';
import jQueryNotPresent from '../common/jQueryNotPresent';
import querySelector from '../common/querySelector';
import setValue from '../system/setValue';
import setupConfigData from './configData';

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
