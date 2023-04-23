import awaitWidget from '../common/awaitWidget';
import getArrayByClassName from '../common/getArrayByClassName';
import getElementById from '../common/getElementById';
import jsonStringify from '../common/jsonStringify';
import once from '../common/once';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import setText from '../dom/setText';
import calf from '../support/calf';
import getValue from '../system/getValue';
import setValue from '../system/setValue';
import injectBlockedSkills from './blockedSkills/injectBlockedSkills';
import createEventListeners from './createEventListeners';
import injectHtml from './injectHtml/injectHtml';

function addTab(tabs) { // jQuery
  const settingsTabs = $(tabs);
  settingsTabs.find('.ui-tabs-nav')
    .append('<li><a href="#fshSettings">FSH</a></li>');
  settingsTabs.append('<div id="fshSettings"></div>');
  settingsTabs.tabs('refresh');
  return settingsTabs.tabs('instance');
}

function doVersion() {
  setText(calf.fshVer, getElementById('fsh-ver'));
  setText(calf.calfVer, getElementById('calf-ver'));
}

function doStorage() {
  const storage = ((jsonStringify(localStorage).length / (5 * 1024 * 1024)) * 100).toFixed(2);
  setText(storage, getElementById('calf-used'));
  setText((100 - storage).toFixed(2), getElementById('calf-remain'));
}

function injectHuntBuffNames() {
  const huntingBuffsSelect = getElementById('enabledHuntingMode');
  if (!huntingBuffsSelect) return;
  ['huntingBuffsName', 'huntingBuffs2Name', 'huntingBuffs3Name'].forEach((pref, i) => {
    const prefVal = getValue(pref);
    huntingBuffsSelect.options[i].text = prefVal;
    getArrayByClassName(`fsh-buff${i + 1}`).forEach((s) => setText(prefVal, s));
  });
}

function loadSettings() {
  injectHuntBuffNames();
  const fields = querySelectorArray('.fsh-settings input[name], .fsh-settings select[name]');
  fields.forEach((ctx) => {
    if (ctx.type === 'checkbox') ctx.checked = getValue(ctx.name);
    else ctx.value = getValue(ctx.name);
  });
}

function paintSettings() {
  injectHtml();
  doVersion();
  doStorage();
  loadSettings();
  createEventListeners();
}

function fshSettings(tabs) {
  const tabsInstance = addTab(tabs);
  if (tabsInstance) {
    once(
      getElementById('ui-id-9'),
      'click',
      paintSettings,
    );
  }
}

export default async function injectSettings() {
  const tabs = getElementById('settingsTabs');
  await awaitWidget(tabs, 'Tabs', 'ui');
  fshSettings(tabs);
  injectBlockedSkills();
  setValue('minGroupLevel', querySelector('input[name="min_group_level"]').value);
}
