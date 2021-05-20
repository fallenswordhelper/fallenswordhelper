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

function hasError(response) {
  if (response === undefined) {
    return {
      s: false,
      r: { e: 'Could not connect to FS servers' },
    };
  }
  return false;
}

export default async function setFlags(flags) {
  const settingsHTML = await indexAjaxData({ cmd: 'settings' });
  const check = hasError(settingsHTML);
  if (check !== undefined && check !== false) { return check; }

  const settingsPage = createDocument(settingsHTML);

  const first = new FormData(settingsPage.forms[0]); // eslint-disable-line no-undef
  first.append('pvp_ladder', flags[0]);

  const ui = new FormData(settingsPage.forms[2]); // eslint-disable-line no-undef
  uiFlags.forEach((f, i) => ui.set(f, flags[i + 1]));

  const result = await [first, ui].reduce(async (prm, f) => {
    const last = await prm;
    if (last !== undefined && last !== false) { return last; }

    const response = await indexAjaxData(Object.fromEntries(f.entries()));
    return hasError(response);
  }, Promise.resolve());

  if (result === false) { return { s: true }; }
  return result;
}
