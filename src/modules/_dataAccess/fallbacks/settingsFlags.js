import createDocument from '../../system/createDocument';
import indexAjaxData from '../../ajax/indexAjaxData';
import isUndefined from '../../common/isUndefined';

const uiFlags = [
  'ui_preference_11',
  'ui_preference_15',
  'disable_wordcensor',
  'ui_preference_30',
  'ui_preference_21',
  'ui_preference_33',
  'ui_preference_23',
];

function hasError(response) {
  if (isUndefined(response)) {
    return {
      s: false,
      r: { e: 'Could not connect to FS servers' },
    };
  }
  return false;
}

async function updateSettings(prm, f) {
  const last = await prm;
  if (!isUndefined(last) && last !== false) { return last; }
  const response = await indexAjaxData(f);
  return hasError(response);
}

async function getSettings() {
  const settingsHTML = await indexAjaxData({ cmd: 'settings' });
  const check = hasError(settingsHTML);
  if (check) { return check; }
  return settingsHTML;
}

function updateLadder(form, opt) {
  const data = new FormData(form);
  data.append('pvp_ladder', opt);
  return Object.fromEntries(data.entries());
}

function updateUI(form, flags) {
  const ui = new FormData(form);
  uiFlags.forEach((f, i) => ui.set(f, flags[i + 1]));
  return Object.fromEntries(ui.entries());
}

export default async function settingsFlags(flags) {
  const settingsHTML = await getSettings();
  const check = hasError(settingsHTML);
  if (check) { return check; }
  const settingsPage = createDocument(settingsHTML);

  const ladder = updateLadder(settingsPage.forms[0], flags[0]);
  const ui = updateUI(settingsPage.forms[2], flags);

  const result = await [ladder, ui].reduce(updateSettings, Promise.resolve());
  if (result === false) {
    return { s: true };
  }
  return result;
}
