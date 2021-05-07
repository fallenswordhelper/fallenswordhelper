import { y as jQueryNotPresent, B as setInnerHtml, o as onclick, z as getElementById, bk as fshBuffLog, p as pCC } from './calfSystem-476ab75d.js';
import { m as makePageTemplate } from './makePageTemplate-e10fdef2.js';
import { g as get, s as set } from './idb-07a4f1ba.js';

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
//# sourceMappingURL=injectBuffLog-9f0acb03.js.map
