import './quickWear.postcss';
import {createDiv} from '../../common/cElement';
import createQuickWear from './createQuickWear';
import {daLoadInventory} from '../../_dataAccess/_dataAccess';
import equipItem from '../../ajax/equipItem';
import eventHandler5 from '../../common/eventHandler5';
import fshTabSet from '../../dialog/fshTabSet';
import getValue from '../../system/getValue';
import hasClass from '../../common/hasClass';
import hasClasses from '../../common/hasClasses';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import {isArray} from '../../common/isArray';
import jConfirm from '../../common/jConfirm';
import jQueryPresent from '../../common/jQueryPresent';
import onclick from '../../common/onclick';
import {pCC} from '../../support/layout';
import partial from '../../common/partial';
import selfIdIs from '../../common/selfIdIs';
import {sendEvent} from '../../support/fshGa';
import setText from '../../common/setText';
import setValue from '../../system/setValue';
import showAHInvManager from './showAHInvManager';
import {simpleCheckboxHtml} from '../../settings/simpleCheckbox';
import {subscribeOnce} from '../../support/pubsub';
import toggleForce from '../../common/toggleForce';
import useItem from '../../ajax/useItem';

const def_disableQuickWearPrompts = 'disableQuickWearPrompts';
var disableQuickWearPrompts;
var itemList;

function actionResult(target, verb, data) {
  if (data.r !== 0) {return;}
  target.parentNode.innerHTML = '<span class="fastWorn">' + verb + '</span>';
}

function doAction(target, fn, verb) { // jQuery.min
  sendEvent('QuickWear', 'doAction - ' + verb);
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
    jConfirm('Use/Extract Item',
      'Are you sure you want to use/extract the item?',
      partial(doUseItem, target)
    );
  }
}

function equipProfileInventoryItem(target) {
  doAction(target, equipItem, 'Worn');
}

function processItems(folderId, thisFolder, o) {
  var tr = o.dom;
  if (folderId === '0') {
    tr.classList.remove('fshHide');
  } else {
    var force = folderId !== thisFolder.toString();
    toggleForce(tr, force);
  }
}

function processFolder(folderId, aFolder) {
  var thisFolder = aFolder.id;
  aFolder.items.forEach(partial(processItems, folderId, thisFolder));
}

function hideFolders(target) {
  var folderId = target.dataset.folder;
  itemList.r.forEach(partial(processFolder, folderId));
}

function togglePref() {
  disableQuickWearPrompts = !disableQuickWearPrompts;
  setValue(def_disableQuickWearPrompts, disableQuickWearPrompts);
}

function evts5() {
  return [
    [partial(hasClasses, ['smallLink', 'fshEq']), equipProfileInventoryItem],
    [partial(hasClasses, ['smallLink', 'fshUse']), useProfileInventoryItem],
    [partial(hasClass, 'fshFolder'), hideFolders],
    [selfIdIs(def_disableQuickWearPrompts), togglePref]
  ];
}

function goodData(appInv) {
  return appInv && appInv.s && isArray(appInv.r);
}

function makePref(thisList) {
  insertElement(thisList, createDiv({
    className: 'qwPref',
    innerHTML: simpleCheckboxHtml(def_disableQuickWearPrompts)
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
  if (!content) {return;}
  insertHtmlBeforeEnd(content, 'Getting item list from backpack...');
  daLoadInventory().then(partial(showQuickWear, content));
  disableQuickWearPrompts = getValue(def_disableQuickWearPrompts);
}

export default function insertQuickWear(injector) {
  if (jQueryPresent()) {hasJquery(injector);}
}
