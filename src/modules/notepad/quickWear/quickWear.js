import './quickWear.css';
import backpack from '../../ajaxQueue/backpack';
import calf from '../../support/calf';
import createDiv from '../../common/cElement/createDiv';
import createQuickWear from './createQuickWear';
import eventHandler5 from '../../common/eventHandler5';
import fshTabSet from './fshTabSet';
import { getPcc } from '../../support/layout';
import getValue from '../../system/getValue';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import isArray from '../../common/isArray';
import jQueryPresent from '../../common/jQueryPresent';
import onclick from '../../common/onclick';
import selfIdIs from '../../common/selfIdIs';
import setValue from '../../system/setValue';
import showAHInvManager from './AHInvManager/showAHInvManager';
import { simpleCheckboxHtml } from '../../settings/simpleCheckbox';
import { subscribeOnce } from '../../support/pubsub';

const defDisableQuickWearPrompts = 'disableQuickWearPrompts';

function togglePref() {
  calf.disableQuickWearPrompts = !calf.disableQuickWearPrompts;
  setValue(defDisableQuickWearPrompts, calf.disableQuickWearPrompts);
}

function evts5() {
  return [
    [selfIdIs(defDisableQuickWearPrompts), togglePref],
  ];
}

function makePref(thisList) {
  insertElement(thisList, createDiv({
    className: 'qwPref',
    innerHTML: simpleCheckboxHtml(defDisableQuickWearPrompts),
  }));
}

function buildQuickWear(content, appInv) {
  subscribeOnce('qwtab-header', makePref);
  subscribeOnce('qwtab0', (thisDiv) => createQuickWear(appInv, thisDiv));
  subscribeOnce('qwtab1', (thisDiv) => showAHInvManager(appInv, thisDiv));
  fshTabSet(content, ['Quick Wear / Use / Extract<br>Manager',
    'Inventory Manager Counter<br>filtered by AH Quick Search'], 'qwtab');
  onclick(content, eventHandler5(evts5()));
}

const goodData = (appInv) => isArray(appInv.folders) && isArray(appInv.items);

function showQuickWear(content, appInv) {
  if (goodData(appInv)) {
    buildQuickWear(content, appInv);
  }
}

async function hasJquery(injector) {
  const content = injector || getPcc();
  if (!content) { return; }
  insertHtmlBeforeEnd(content, 'Getting item list from backpack...');
  calf.disableQuickWearPrompts = getValue(defDisableQuickWearPrompts);
  const appInv = await backpack();
  showQuickWear(content, appInv);
}

export default function quickWear(injector) {
  if (jQueryPresent()) hasJquery(injector);
}
