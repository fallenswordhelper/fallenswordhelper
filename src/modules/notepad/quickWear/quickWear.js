import './quickWear.css';
import createDiv from '../../common/cElement/createDiv';
import createQuickWear from './createQuickWear';
import daLoadInventory from '../../_dataAccess/daLoadInventory';
import equipItem from '../../ajax/equipItem';
import eventHandler5 from '../../common/eventHandler5';
import fshTabSet from './fshTabSet';
import getArrayByClassName from '../../common/getArrayByClassName';
import getValue from '../../system/getValue';
import hasClass from '../../common/hasClass';
import hasClasses from '../../common/hasClasses';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import isArray from '../../common/isArray';
import jConfirm from '../../common/jConfirm';
import jQueryPresent from '../../common/jQueryPresent';
import onclick from '../../common/onclick';
import { pCC } from '../../support/layout';
import partial from '../../common/partial';
import selfIdIs from '../../common/selfIdIs';
import sendEvent from '../../analytics/sendEvent';
import setInnerHtml from '../../dom/setInnerHtml';
import setText from '../../dom/setText';
import setValue from '../../system/setValue';
import showAHInvManager from './showAHInvManager';
import { simpleCheckboxHtml } from '../../settings/simpleCheckbox';
import { subscribeOnce } from '../../support/pubsub';
import toggleForce from '../../common/toggleForce';
import useItem from '../../ajax/useItem';

const defDisableQuickWearPrompts = 'disableQuickWearPrompts';
let disableQuickWearPrompts;
let itemList;

function actionResult(target, verb, data) {
  if (data.r !== 0) { return; }
  setInnerHtml(`<span class="fastWorn">${verb}</span>`, target.parentNode);
}

function doAction(target, fn, verb) { // jQuery.min
  sendEvent('QuickWear', `doAction - ${verb}`);
  setText('', target);
  target.classList.remove('smallLink');
  target.classList.add('fshSpinner', 'fshSpin12');
  fn(target.dataset.itemid).then(partial(actionResult, target, verb));
}

function doUseItem(target) {
  doAction(target, useItem, 'Used');
}

function useProfileInventoryItem(target) {
  if (disableQuickWearPrompts) {
    doUseItem(target);
  } else {
    jConfirm(
      'Use/Extract Item',
      'Are you sure you want to use/extract the item?',
      partial(doUseItem, target),
    );
  }
}

function equipProfileInventoryItem(target) {
  doAction(target, equipItem, 'Worn');
}

function processItems(folderId, thisFolder, o) {
  const tr = o.dom;
  if (folderId === '0') {
    tr.classList.remove('fshHide');
  } else {
    const force = folderId !== thisFolder.toString();
    toggleForce(tr, force);
  }
}

function processFolder(folderId, aFolder) {
  const thisFolder = aFolder.id;
  aFolder.items.forEach(partial(processItems, folderId, thisFolder));
}

function hideFolders(target) {
  const folderId = target.dataset.folder;
  itemList.r.inventories.forEach(partial(processFolder, folderId));
}

function togglePref() {
  disableQuickWearPrompts = !disableQuickWearPrompts;
  setValue(defDisableQuickWearPrompts, disableQuickWearPrompts);
}

function evts5() {
  return [
    [partial(hasClasses, ['smallLink', 'fshEq']), equipProfileInventoryItem],
    [partial(hasClasses, ['smallLink', 'fshUse']), useProfileInventoryItem],
    [partial(hasClass, 'fshFolder'), hideFolders],
    [selfIdIs(defDisableQuickWearPrompts), togglePref],
  ];
}

function goodData(appInv) {
  return appInv && appInv.s && isArray(appInv.r?.inventories);
}

function makePref(thisList) {
  insertElement(thisList, createDiv({
    className: 'qwPref',
    innerHTML: simpleCheckboxHtml(defDisableQuickWearPrompts),
  }));
}

function injectContent(thisFn, appInv, thisDiv) {
  insertElement(thisDiv, thisFn(appInv));
}

function buildQuickWear(content, appInv) {
  subscribeOnce('qwtab-header', makePref);
  subscribeOnce('qwtab0', partial(injectContent, createQuickWear, appInv));
  subscribeOnce('qwtab1', partial(injectContent, showAHInvManager, appInv));
  fshTabSet(content, ['Quick Wear / Use / Extract<br>Manager',
    'Inventory Manager Counter<br>filtered by AH Quick Search'], 'qwtab');
  onclick(content, eventHandler5(evts5()));
}

function showQuickWear(content, appInv) {
  if (goodData(appInv)) {
    itemList = appInv;
    buildQuickWear(content, appInv);
  }
}

function hasJquery(injector) { // jQuery.min
  const content = injector || pCC;
  if (!content) { return; }
  insertHtmlBeforeEnd(content, 'Getting item list from backpack...');
  daLoadInventory().then(partial(showQuickWear, content));
  disableQuickWearPrompts = getValue(defDisableQuickWearPrompts);
  getArrayByClassName('ui-dialog-titlebar-close').forEach((e) => e.blur());
}

export default function quickWear(injector) {
  if (jQueryPresent()) { hasJquery(injector); }
}
