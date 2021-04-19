import { y as jQueryNotPresent, B as setInnerHtml, o as onclick, z as getElementById, bj as fshBuffLog, p as pCC } from './calfSystem-d5c49dc8.js';
import { m as makePageTemplate } from './makePageTemplate-98b04ddb.js';
import { g as get, s as set } from './idb-83942350.js';

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
//# sourceMappingURL=injectBuffLog-0d48304d.js.map
