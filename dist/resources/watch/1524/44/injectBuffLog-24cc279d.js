import { y as jQueryNotPresent, B as setInnerHtml, o as onclick, z as getElementById, bm as fshBuffLog, p as pCC } from './calfSystem-23094c64.js';
import { m as makePageTemplate } from './makePageTemplate-8de94f73.js';
import { g as get, s as set } from './idb-19ed4aa8.js';

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
//# sourceMappingURL=injectBuffLog-24cc279d.js.map
