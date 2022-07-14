import sendEvent from '../analytics/sendEvent';
import createSpan from '../common/cElement/createSpan';
import getElementById from '../common/getElementById';
import getElementsByClassName from '../common/getElementsByClassName';
import getElementsByTagName from '../common/getElementsByTagName';
import getText from '../common/getText';
import insertElement from '../common/insertElement';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import jQueryPresent from '../common/jQueryPresent';
import onclick from '../common/onclick';
import { doAddIgnore } from '../support/constants';
import { get, set } from '../system/idb';
import jQueryDialog from './jQueryDialog/jQueryDialog';
import injectFsBoxContent from './pageSwitcher/loader/injectFsBoxContent';

function getBoxList(boxList) {
  if (boxList) { return boxList; }
  return '';
}

function storeFSBox(_boxList) {
  let boxList = getBoxList(_boxList);
  const fsbox = getElementsByClassName('message', getElementById('minibox-fsbox'))[0].innerHTML;
  if (boxList.indexOf(fsbox) < 0) { boxList = `<br>${fsbox}${boxList}`; }
  if (boxList.length > 10000) { boxList = boxList.substring(0, 10000); }
  set('fsh_fsboxcontent', boxList);
}

function storeMsg(nodediv) {
  let playerName = getElementsByTagName('a', nodediv);
  if (playerName.length === 0) { return; }
  get('fsh_fsboxcontent').then(storeFSBox);
  playerName = getText(playerName[0]);
  insertHtmlBeforeEnd(
    nodediv,
    `<span class="fshPaleVioletRed">[ <a href="${doAddIgnore}${playerName}">Ignore</a> ]</span> `,
  );
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

export default function injectFSBoxLog() {
  const node = getElementById('minibox-fsbox');
  if (jQueryPresent() && node) { fSBoxExists(node); }
}
