import indexAjaxData from '../../ajax/indexAjaxData';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';
import {
  blockedSkillsCheckboxes,
  levelDefaults,
} from '../../support/constants';
import createDocument from '../../system/createDocument';

function getSkills(settingsPage) {
  const buffLevels = levelDefaults.map(([id, ctl]) => ({
    id,
    level: Number(querySelector(`input[name="${ctl}"]`, settingsPage).value),
    blocked: querySelector(
      `${blockedSkillsCheckboxes}[value="${id}"]`,
      settingsPage,
    ).checked,
  }));
  return [
    ...buffLevels,
    ...querySelectorArray(`${blockedSkillsCheckboxes}:checked`, settingsPage)
      .map((i) => ({ id: Number(i.value), level: 0, blocked: i.checked }))
      .filter((b) => !buffLevels.find(({ id }) => b.id === id))
      .sort((a, b) => a.id - b.id),
  ];
}

function getDrops(form) {
  const entries = [...form.entries()];
  return entries
    .filter((e) => e[0].startsWith('discardPref'))
    .map((e) => ({
      id: parseInt(e[0][e[0].length - 1], 10),
      action: parseInt(e[1], 10),
    }));
}

function makeFlags(fds) {
  return [
    fds[0].get('pvp_ladder') === '1',
    fds[2].get('ui_preference_11') === '1',
    fds[2].get('ui_preference_15') === '1',
    fds[2].get('disable_wordcensor') === '1',
    fds[2].get('ui_preference_30') === '1',
    fds[2].get('ui_preference_21') === '1',
    fds[2].get('ui_preference_33') === '1',
    fds[2].get('ui_preference_23') === '1',
  ];
}

const buildFormData = (settingsPage) =>
  [...settingsPage.forms].map((e) => new FormData(e));
const getNumeric = (form, key) => parseInt(form.get(key), 10);

function resultObject(settingsPage) {
  const fds = buildFormData(settingsPage);
  return {
    s: true,
    r: {
      skills: getSkills(settingsPage),
      item_drop_rarity: getDrops(fds[1]),
      flags: makeFlags(fds),
      min_group_join_level: getNumeric(fds[0], 'min_group_level'),
      item_drop_discard_level: getNumeric(fds[1], 'auto_discard_level'),
      player_block_type: getNumeric(fds[2], 'block_level'),
    },
  };
}

export default async function settingsView() {
  const settingsHTML = await indexAjaxData({ cmd: 'settings' });
  if (!settingsHTML) {
    return {
      s: false,
      e: { message: 'Could not connect to FS servers', code: 1 },
    };
  }
  return resultObject(createDocument(settingsHTML));
}
