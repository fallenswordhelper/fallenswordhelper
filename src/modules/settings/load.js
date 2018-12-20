import dialogMsg from '../common/dialogMsg';
import {getElementById} from '../common/getElement';
import getValue from '../system/getValue';
import isObject from '../common/isObject';
import jQueryNotPresent from '../common/jQueryNotPresent';
import jsonParse from '../common/jsonParse';
import {pCC} from '../support/layout';
import partial from '../common/partial';
import setValue from '../system/setValue';

function drawBox(content, fshSettings) {
  content.innerHTML = '<h1>FSH Settings</h1><br><center>The box below ' +
    'is your current settings. Copy it to save your current settings<br>' +
    'To load saved settings, simply replace the contents of the box with ' +
    'your saved copy and press the button below.' +
    '<textarea align="center" cols="80" rows="25" style="' +
    'background-color:white;' +
    'font-family:Consolas,\'Lucida Console\',\'Courier New\',monospace;" ' +
    'id="HelperfshSettings" name="fshSettings">' +
    JSON.stringify(fshSettings) + '</textarea>' +
    '<br><input id="HelperLoadSettings" class="custombutton" ' +
    'type="submit" value="Load Settings!" /></center>';
}

function saveSetting(settings, id) {
  setValue(id, settings[id]);
}

function clickHandler() {
  var userInput = jsonParse(getElementById('HelperfshSettings').value);
  if (isObject(userInput)) {
    var settings = userInput;
    Object.keys(settings).forEach(partial(saveSetting, settings));
    dialogMsg('Settings loaded successfully!');
  }
}

export default function injectSaveSettings() { // Hybrid
  if (jQueryNotPresent()) {return;}
  var content = pCC;
  var fshSettings = {};
  var list = GM_listValues();
  for (var i = 0; i < list.length; i += 1) {
    fshSettings[list[i]] = getValue(list[i]);
  }
  drawBox(content, fshSettings);
  $('#HelperLoadSettings').click(clickHandler);
}
