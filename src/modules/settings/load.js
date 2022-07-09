import dialogMsg from '../common/dialogMsg';
import getElementById from '../common/getElementById';
import { getPcc } from '../support/layout';
import getValue from '../system/getValue';
import isObject from '../common/isObject';
import jQueryNotPresent from '../common/jQueryNotPresent';
import jsonParse from '../common/jsonParse';
import jsonStringify from '../common/jsonStringify';
import keys from '../common/keys';
import listValues from '../system/listValues';
import partial from '../common/partial';
import setInnerHtml from '../dom/setInnerHtml';
import setValue from '../system/setValue';

function drawBox(content, fshSettings) {
  setInnerHtml('<h1>FSH Settings</h1><br><center>The box below '
    + 'is your current settings. Copy it to save your current settings<br>'
    + 'To load saved settings, simply replace the contents of the box with '
    + 'your saved copy and press the button below.'
    + '<textarea align="center" cols="80" rows="25" style="'
    + 'background-color:white;'
    + 'font-family:Consolas,\'Lucida Console\',\'Courier New\',monospace;" '
    + `id="HelperfshSettings" name="fshSettings">${
      jsonStringify(fshSettings)}</textarea>`
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

export default function load() { // Hybrid
  if (jQueryNotPresent()) { return; }
  const fshSettings = listValues().reduce(buildSettingsObj, {});
  drawBox(getPcc(), fshSettings);
  $('#HelperLoadSettings').on('click', clickHandler);
}
