import { y as jQueryNotPresent, B as setInnerHtml, o as onclick, z as getElementById, bo as fshBuffLog, p as pCC } from './calfSystem-86663d02.js';
import { m as makePageTemplate } from './makePageTemplate-73857573.js';
import { g as get, s as set } from './idb-0b309dec.js';

function displayBuffLog(buffLog) {
  setInnerHtml(buffLog, getElementById('bufflog'));
}

function clearBuffLog() {
  set(fshBuffLog, '').then(displayBuffLog);
}

function injectBuffLog(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const content = injector || pCC;
  setInnerHtml(makePageTemplate({
    title: 'Buff Log',
    comment: '',
    spanId: 'clearBuffs',
    button: 'Clear',
    divId: 'bufflog',
  }), content);
  onclick(getElementById('clearBuffs'), clearBuffLog);
  get(fshBuffLog).then(displayBuffLog);
}

export default injectBuffLog;
//# sourceMappingURL=injectBuffLog-63d4ab27.js.map
