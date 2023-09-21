import './helperMenu.css';
import sendEvent from '../../analytics/sendEvent';
import createDiv from '../../common/cElement/createDiv';
import classHandler from '../../common/classHandler';
import draggable from '../../common/draggable';
import getText from '../../common/getText';
import insertElement from '../../common/insertElement';
import isFunction from '../../common/isFunction';
import jQueryPresent from '../../common/jQueryPresent';
import once from '../../common/once';
import onclick from '../../common/onclick';
import querySelector from '../../common/querySelector';
import getValue from '../../system/getValue';
import jQueryDialog from '../jQueryDialog/jQueryDialog';
import functionLookup from './functionLookup';
import getHelperMenuBlob from './getHelperMenuBlob';

let helperMenuDiv = 0;

function closeMenu() {
  helperMenuDiv.classList.remove('helperMenuShow');
}

function toggleMenu(evt) {
  if (evt.target.id !== 'helperMenu') return;
  helperMenuDiv.classList.toggle('helperMenuShow');
}

function callHelperFunction(target) {
  const functionPath = getText(target);
  const fn = functionLookup[functionPath];
  if (jQueryPresent() && isFunction(fn)) {
    sendEvent('helperMenu', functionPath);
    jQueryDialog(fn);
    closeMenu();
  }
}

function callModalFunction(target) {
  const functionPath = getText(target);
  const fn = functionLookup[functionPath];
  if (isFunction(fn)) {
    sendEvent('helperMenu', functionPath);
    fn();
    closeMenu();
  }
}

function doMsg(target) {
  sendEvent('helperMenu', 'helperMenuReply');
  window.openQuickMsgDialog(target.getAttribute('target_player'));
  closeMenu();
}

const classEvents = [
  ['fshLink', callHelperFunction],
  ['helperGo', callModalFunction],
  ['helperMenuReply', doMsg],
];

function showHelperMenu(evt) {
  const helperMenu = evt.target;
  helperMenuDiv = createDiv({
    className: 'helperMenuDiv',
    id: 'helperMenuDiv',
    innerHTML: getHelperMenuBlob(),
  });
  insertElement(helperMenu, helperMenuDiv);
  onclick(helperMenu, toggleMenu);
  onclick(helperMenuDiv, classHandler(classEvents));
}

export default function injectHelperMenu() {
  const mainbody = querySelector('.mainbody');
  if (!mainbody) return;
  // don't put all the menu code here (but call if clicked) to minimize lag
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
