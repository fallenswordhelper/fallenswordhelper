// import { get } from '../system/idb';
import getElementById from '../common/getElement';
import jConfirm from '../common/jConfirm';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import { pCC } from '../support/layout';
import setInnerHtml from '../dom/setInnerHtml';
import { get, set } from '../system/idb';

let combatLog = [];
let textArea;

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

function gotCombatLog(content, data) {
  if (data) { combatLog = data; }
  setInnerHtml('<h1>Combat Logs</h1><br>'
    + '<div align="center"><textarea align="center" cols="80" rows="25" '
    + 'readonly style="background-color:white;font-family:Consolas,\''
    + 'Lucida Console\',\'Courier New\',monospace;" id="combatLog" '
    + `name="logs">${JSON.stringify(combatLog)}</textarea>`
    + '<br><br><table width="100%"><tr><td colspan="2" align=center>'
    + '<input type="button" class="custombutton" value="Select All" id="copyLog">'
    + '</td><td colspan="2" align=center>'
    + '<input type="button" class="custombutton" value="Clear" id="clearLog">'
    + '</td></tr></table></div>', content);
  textArea = getElementById('combatLog');
  onclick(getElementById('copyLog'), notepadCopyLog);
  onclick(getElementById('clearLog'), notepadClearLog);
}

export default async function injectNotepadShowLogs(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const data = await get('fsh_combatLog');
  gotCombatLog(injector || pCC, data);
}
