import { x as getElementById, j as jQueryPresent, F as getElementsByClassName, g as getElementsByTagName, A as getText, e as insertHtmlBeforeEnd, be as doAddIgnore, U as sendEvent, V as jQueryDialog, c2 as injectFsBoxContent, o as onclick, i as insertElement } from './calfSystem-f6498976.js';
import { s as set, g as get } from './idb-19d381b0.js';
import { c as createSpan } from './createSpan-38593aca.js';

function getBoxList(boxList) {
  if (boxList) { return boxList; }
  return '';
}

function storeFSBox(_boxList) {
  let boxList = getBoxList(_boxList);
  const fsbox = getElementsByClassName('message',
    getElementById('minibox-fsbox'))[0].innerHTML;
  if (boxList.indexOf(fsbox) < 0) { boxList = `<br>${fsbox}${boxList}`; }
  if (boxList.length > 10000) { boxList = boxList.substring(0, 10000); }
  set('fsh_fsboxcontent', boxList);
}

function storeMsg(nodediv) {
  let playerName = getElementsByTagName('a', nodediv);
  if (playerName.length === 0) { return; }
  get('fsh_fsboxcontent').then(storeFSBox);
  playerName = getText(playerName[0]);
  insertHtmlBeforeEnd(nodediv,
    `<span class="fshPaleVioletRed">[ <a href="${doAddIgnore
    }${playerName}">Ignore</a> ]</span> `);
}

function openDialog() {
  sendEvent('injectFSBoxLog', 'injectFsBoxContent');
  jQueryDialog(injectFsBoxContent);
}

function fSBoxExists(node) {
  const nodediv = node.lastElementChild;
  insertHtmlBeforeEnd(nodediv, '<br>');
  storeMsg(nodediv);
  const log = createSpan({
    className: 'fshYellow',
    innerHTML: '[ <span class="fshLink">Log</span> ]',
  });
  onclick(log, openDialog);
  insertElement(nodediv, log);
}

function injectFSBoxLog() {
  const node = getElementById('minibox-fsbox');
  if (jQueryPresent() && node) { fSBoxExists(node); }
}

export default injectFSBoxLog;
//# sourceMappingURL=injectFSBoxLog-f618906c.js.map
