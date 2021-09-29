import './helperMenu.css';
import classHandler from '../../common/classHandler';
import createDiv from '../../common/cElement/createDiv';
import draggable from '../../common/draggable';
import functionLookup from './functionLookup';
import getElementById from '../../common/getElementById';
import getHelperMenuBlob from './getHelperMenuBlob';
import getText from '../../common/getText';
import getValue from '../../system/getValue';
import gsDl from './gsDl';
import insertElement from '../../common/insertElement';
import isFunction from '../../common/isFunction';
import jQueryDialog from '../jQueryDialog/jQueryDialog';
import jQueryPresent from '../../common/jQueryPresent';
import once from '../../common/once';
import onclick from '../../common/onclick';
import sendEvent from '../../analytics/sendEvent';

function toggleMenu(evt) {
  if (evt.target.id !== 'helperMenu') { return; }
  const menu = evt.target.children[0];
  menu.classList.toggle('helperMenuShow');
}

function callHelperFunction(target) {
  const functionPath = getText(target);
  const fn = functionLookup[functionPath];
  if (jQueryPresent() && isFunction(fn)) {
    sendEvent('helperMenu', functionPath);
    jQueryDialog(fn);
  }
}

const classEvents = [
  ['fshLink', callHelperFunction],
  ['helperMenuReply', (target) => {
    window.openQuickMsgDialog(target.getAttribute('target_player'));
  }],
  ['helperDl', gsDl],
];

function showHelperMenu(evt) {
  const helperMenu = evt.target;
  const helperMenuDiv = createDiv({
    className: 'helperMenuDiv fshInnerBg',
    id: 'helperMenuDiv',
    innerHTML: getHelperMenuBlob(),
  });
  insertElement(helperMenu, helperMenuDiv);
  onclick(helperMenu, toggleMenu);
  onclick(helperMenuDiv, classHandler(classEvents));
}

function haveNode() {
  const helperMenu = createDiv({
    id: 'helperMenu',
    className: 'helperMenu',
    innerHTML: 'Helper&nbsp;Menu',
  });
  if (getValue('keepHelperMenuOnScreen')) {
    helperMenu.classList.add('helperMenuFixed');
  }
  once(helperMenu, 'mouseenter', showHelperMenu);
  if (getValue('draggableHelperMenu')) {
    helperMenu.classList.add('helperMenuMove');
    draggable(helperMenu);
  }
  insertElement(document.body, helperMenu);
}

export default function injectHelperMenu() {
  // don't put all the menu code here (but call if clicked) to minimize lag
  const node = getElementById('statbar-container');
  if (node) { haveNode(); }
}
