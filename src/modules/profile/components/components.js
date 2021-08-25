import calf from '../../support/calf';
import classHandler from '../../common/classHandler';
import clickThis from '../../common/clickThis';
import componentsNew from '../components_new/components';
import countComponent from './countComponent';
import createDiv from '../../common/cElement/createDiv';
import decorateButton from './decorateButton';
import delCompType from './delCompType';
import delComponent from './delComponent';
import getArrayByClassName from '../../common/getArrayByClassName';
import getArrayByTagName from '../../common/getArrayByTagName';
import getInvTable from './getInvTable';
import hideElement from '../../common/hideElement';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import jQueryDialog from '../../chrome/jQueryDialog/jQueryDialog';
import onclick from '../../common/onclick';
import { quickExtract } from '../../chrome/pageSwitcher/loader';
import sendEvent from '../../analytics/sendEvent';

const buttonLabels = [
  'Enable Quick Del',
  'Count Components',
  'Quick Extract Components',
];

function addButtons(acc, el) {
  insertElement(acc, decorateButton(el));
  return acc;
}

function componentBtnContainer() {
  return buttonLabels.reduce(addButtons, createDiv({ className: 'fshCenter' }));
}

function quickExtractHandler() {
  sendEvent('components', 'insertQuickExtract');
  jQueryDialog(quickExtract);
}

function addDelBtn(el) {
  insertHtmlBeforeEnd(el.parentNode.parentNode,
    '<span class="compDelBtn">Del</span>');
}

function enableDelComponent(target) {
  sendEvent('components', 'enableDelComponent');
  const quickDelDiv = target.parentNode;
  hideElement(quickDelDiv);
  const cmDiv = quickDelDiv.parentNode;
  insertElement(cmDiv, decorateButton('Delete All Visible'));
  getArrayByTagName('img', getInvTable()).forEach(addDelBtn);
}

function delAllComponent(target) {
  sendEvent('components', 'delAllComponent');
  const thisInvTable = target.parentNode.parentNode.parentNode.children[0];
  getArrayByClassName('compDelBtn', thisInvTable).forEach(clickThis);
}

const classEvts = [
  ['quick-extract-components', quickExtractHandler],
  ['enable-quick-del', enableDelComponent],
  ['delete-all-visible', delAllComponent],
  ['compDelBtn', delComponent],
  ['count-components', countComponent],
  ['compDelType', delCompType],
];

function addComposingButtons(thisInvTable) {
  const compDiv = thisInvTable.parentNode;
  insertElement(compDiv, componentBtnContainer());
  onclick(compDiv, classHandler(classEvts));
}

export default function components() {
  const thisInvTable = getInvTable();
  if (!thisInvTable) { return; }
  const test = 1;
  if (test && calf.userIsDev) {
    componentsNew();
  } else {
    addComposingButtons(thisInvTable);
  }
}
