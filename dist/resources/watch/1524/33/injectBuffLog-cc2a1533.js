import { x as jQueryNotPresent, A as setInnerHtml, o as onclick, y as getElementById, bi as fshBuffLog, p as pCC } from './calfSystem-cc2b30b5.js';
import { m as makePageTemplate } from './makePageTemplate-4a253bba.js';
import { g as get, s as set } from './idb-cc82dc55.js';

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
//# sourceMappingURL=injectBuffLog-cc2a1533.js.map
