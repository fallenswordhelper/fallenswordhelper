import { bI as GMSTORAGE_PATH, z as jQueryNotPresent, C as setInnerHtml, a1 as setValue, aV as jsonParse, A as getElementById, b5 as isObject, az as keys, u as partial, G as getValue, p as pCC } from './calfSystem-5ce1fc75.js';
import { d as dialogMsg } from './dialogMsg-e44c1b78.js';

function listValues() {
  const list = [];
  const reKey = new RegExp(`^${GMSTORAGE_PATH}`);
  for (let i = 0, il = window.localStorage.length; i < il; i += 1) {
    const key = window.localStorage.key(i);
    if (key.match(reKey)) {
      list.push(key.replace(GMSTORAGE_PATH, ''));
    }
  }
  return list;
}

function drawBox(content, fshSettings) {
  setInnerHtml('<h1>FSH Settings</h1><br><center>The box below '
    + 'is your current settings. Copy it to save your current settings<br>'
    + 'To load saved settings, simply replace the contents of the box with '
    + 'your saved copy and press the button below.'
    + '<textarea align="center" cols="80" rows="25" style="'
    + 'background-color:white;'
    + 'font-family:Consolas,\'Lucida Console\',\'Courier New\',monospace;" '
    + `id="HelperfshSettings" name="fshSettings">${
      JSON.stringify(fshSettings)}</textarea>`
    + '<br><input id="HelperLoadSettings" class="custombutton" '
    + 'type="submit" value="Load Settings!" /></center>', content);
}

function saveSetting(settings, id) {
  setValue(id, settings[id]);
}

function clickHandler() {
  const userInput = jsonParse(getElementById('HelperfshSettings').value);
  if (isObject(userInput)) {
    const settings = userInput;
    keys(settings).forEach(partial(saveSetting, settings));
    dialogMsg('Settings loaded successfully!');
  }
}

function buildSettingsObj(acc, curr) {
  acc[curr] = getValue(curr);
  return acc;
}

function injectSaveSettings() { // Hybrid
  if (jQueryNotPresent()) { return; }
  const fshSettings = listValues().reduce(buildSettingsObj, {});
  drawBox(pCC, fshSettings);
  $('#HelperLoadSettings').on('click', clickHandler);
}

export default injectSaveSettings;
//# sourceMappingURL=load-cf6e9a00.js.map
