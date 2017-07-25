import getForage from '../ajax/getForage';
import setForage from '../ajax/setForage';
import * as layout from '../support/layout';

function displayBuffLog(buffLog) { // Native
  document.getElementById('bufflog').innerHTML = buffLog;
}

function clearBuffLog() { // Native
  setForage('fsh_buffLog', '').done(displayBuffLog);
}

export default function injectBuffLog(injector) { // Native
  var content = injector || layout.pCC;
  content.innerHTML = layout.makePageTemplate('Buff Log', '',
    'clearBuffs', 'Clear', 'bufflog');
  document.getElementById('clearBuffs').addEventListener('click', clearBuffLog);
  getForage('fsh_buffLog').done(displayBuffLog);
}
