import { y as jQueryNotPresent, B as setInnerHtml, z as getElementById, o as onclick, p as pCC } from './calfSystem-6840a38e.js';
import { j as jConfirm } from './jConfirm-35009783.js';
import { g as get, s as set } from './idb-e00287d8.js';

let content;
let combatLog = [];
let textArea;
const yuuzParser = '<tr><td align="center" colspan="4"><b>Log Parser</b>'
  + '</td></tr>'
  + '<tr><td colspan="4" align="center">WARNING: this links to an '
  + 'external site not related to HCS.<br />'
  + 'If you wish to visit site directly URL is: http://evolutions.'
  + 'yvong.com/fshlogparser.php<br />'
  + '<tr><td colspan=4 align="center"><input type="hidden" value="true" '
  + 'name="submit"><input type="submit" value="Analyze!"></td></tr>';

function notepadCopyLog() {
  textArea.focus();
  textArea.select();
}

function clearCombatLog() {
  combatLog = [];
  textArea.value = '[]';
  set('fsh_combatLog', combatLog);
}

function notepadClearLog() { // jQuery
  jConfirm('Clear Combat Log',
    'Are you sure you want to clear your log?', clearCombatLog);
}

function gotCombatLog(data) {
  if (data) { combatLog = data; }
  setInnerHtml('<h1>Combat Logs</h1><br /><form action="http://'
    + 'evolutions.yvong.com/fshlogparser.php" method="post" target="_blank">'
    + '<div align="center"><textarea align="center" cols="80" rows="25" '
    + 'readonly style="background-color:white;font-family:Consolas,\''
    + 'Lucida Console\',\'Courier New\',monospace;" id="combatLog" '
    + `name="logs">${JSON.stringify(combatLog)}</textarea></div>`
    + '<br /><br /><table width="100%"><tr>'
    + '<td colspan="2" align=center>'
    + '<input type="button" class="custombutton" value="Select All" '
    + 'id="copyLog"></td>'
    + '<td colspan="2" align=center>'
    + '<input type="button" class="custombutton" value="Clear" '
    + 'id="clearLog"></td>'
    + `</tr>${yuuzParser}</table></div>`
    + '</form>', content);
  textArea = getElementById('combatLog');
  onclick(getElementById('copyLog'), notepadCopyLog);
  onclick(getElementById('clearLog'), notepadClearLog);
}

function injectNotepadShowLogs(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  content = injector || pCC;
  get('fsh_combatLog').then(gotCombatLog);
}

export default injectNotepadShowLogs;
//# sourceMappingURL=combatLog-c890db06.js.map
