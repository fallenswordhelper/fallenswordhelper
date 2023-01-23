import './helperMenu.css';
import sendEvent from '../../analytics/sendEvent';
import createDiv from '../../common/cElement/createDiv';
import classHandler from '../../common/classHandler';
import draggable from '../../common/draggable';
import getText from '../../common/getText';
import insertElement from '../../common/insertElement';
import insertElementAfterBegin from '../../common/insertElementAfterBegin';
import isFunction from '../../common/isFunction';
import jQueryPresent from '../../common/jQueryPresent';
import once from '../../common/once';
import onclick from '../../common/onclick';
import querySelector from '../../common/querySelector';
import getValue from '../../system/getValue';
import jQueryDialog from '../jQueryDialog/jQueryDialog';
import functionLookup from './functionLookup';
import getHelperMenuBlob from './getHelperMenuBlob';

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

function callModalFunction(target) {
  const functionPath = getText(target);
  const fn = functionLookup[functionPath];
  if (isFunction(fn)) {
    sendEvent('helperMenu', functionPath);
    fn();
  }
}

const classEvents = [
  ['fshLink', callHelperFunction],
  ['helperGo', callModalFunction],
  ['helperMenuReply', (target) => {
    sendEvent('helperMenu', 'helperMenuReply');
    window.openQuickMsgDialog(target.getAttribute('target_player'));
  }],
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

function haveNode(node) {
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
  insertElementAfterBegin(node, helperMenu);
}

export default function injectHelperMenu() {
  // don't put all the menu code here (but call if clicked) to minimize lag
  const node = querySelector('.mainbody');
  if (node) haveNode(node);
}
