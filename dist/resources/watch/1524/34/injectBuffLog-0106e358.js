import { x as jQueryNotPresent, A as setInnerHtml, o as onclick, y as getElementById, bi as fshBuffLog, p as pCC } from './calfSystem-d1de1997.js';
import { m as makePageTemplate } from './makePageTemplate-27b3665d.js';
import { g as get, s as set } from './idb-261893ee.js';

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
//# sourceMappingURL=injectBuffLog-0106e358.js.map
