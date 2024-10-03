import './fsbox.css';
import sendEvent from '../../analytics/sendEvent';
import createAnchor from '../../common/cElement/createAnchor';
import createButton from '../../common/cElement/createButton';
import createSpan from '../../common/cElement/createSpan';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import insertElement from '../../common/insertElement';
import insertTextBeforeEnd from '../../common/insertTextBeforeEnd';
import onclick from '../../common/onclick';
import querySelector from '../../common/querySelector';
import trim from '../../common/trim';
import { doAddIgnore, playerLinkSelector } from '../../support/constants';
import { get, set } from '../../system/idb';
import fsboxlog from '../pageSwitcher/loader/fsboxlog';

function openLog() {
  sendEvent('fsbox', 'open log');
  fsboxlog();
}

function wrapper(subclass, element) {
  const span = createSpan({
    className: `fsh-fsbox ${subclass}`,
    textContent: '[ ',
  });
  insertElement(span, element);
  insertTextBeforeEnd(span, ' ]');
  return span;
}

function injectLogButton(node) {
  const logBtn = createButton({ textContent: 'Log' });
  onclick(logBtn, openLog);
  insertElement(node, wrapper('fs-box-log', logBtn));
}

function injectIgnoreButton(node, playerLink) {
  const ignoreBtn = createAnchor({
    href: `${doAddIgnore}${getText(playerLink)}`,
    textContent: 'Ignore',
  });
  onclick(ignoreBtn, () => sendEvent('fsbox', 'ignore link'));
  insertElement(node, wrapper('fs-box-ignore', ignoreBtn));
}

async function storeMessage(node) {
  const boxList = (await get('fsh_fsboxcontent')) ?? '';
  const msg = trim(querySelector('.message', node).innerHTML);
  if (boxList.includes(msg)) return;
  const newBoxList = `<br>${msg}${boxList}`;
  set('fsh_fsboxcontent', newBoxList.slice(0, 9999));
}

function lookForMessage(node) {
  const playerLink = querySelector(playerLinkSelector, node);
  if (!playerLink) return;
  injectIgnoreButton(node, playerLink);
  storeMessage(node);
}

function haveFsBox(node) {
  node.classList.add('fshRelative');
  injectLogButton(node);
  lookForMessage(node);
}

export default function fsbox() {
  const node = getElementById('minibox-fsbox');
  if (node) haveFsBox(node);
}
