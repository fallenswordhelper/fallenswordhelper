import createDocument from '../../system/createDocument';
import indexAjaxData from '../../ajax/indexAjaxData';

const uiFlags = [
  'ui_preference_11',
  'ui_preference_15',
  'disable_wordcensor',
  'ui_preference_30',
  'ui_preference_21',
  'ui_preference_33',
  'ui_preference_23',
];

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
  const settingsHTML = await indexAjaxData({ cmd: 'settings' });
  const settingsPage = createDocument(settingsHTML);

  const ladder = updateLadder(settingsPage.forms[0], flags[0]);
  const ui = updateUI(settingsPage.forms[2], flags);

  await Promise.all([ladder, ui].map((f) => indexAjaxData(f)));
  return { s: true };
}
