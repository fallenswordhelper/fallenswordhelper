import { z as jQueryNotPresent, C as setInnerHtml, ak as get, o as onclick, A as getElementById, ai as set, p as pCC } from './calfSystem-e592bbc5.js';
import { m as makePageTemplate } from './makePageTemplate-710f8ff9.js';

function inject(fsboxcontent) {
  setInnerHtml(fsboxcontent, getElementById('fsboxdetail'));
}

function clearFsBox() {
  set('fsh_fsboxcontent', '');
  window.location.reload();
}

function injectFsBoxContent(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const content = injector || pCC;
  setInnerHtml(makePageTemplate({
    title: 'FS Box Log',
    comment: '',
    spanId: 'fsboxclear',
    button: 'Clear',
    divId: 'fsboxdetail',
  }), content);
  get('fsh_fsboxcontent').then(inject);
  onclick(getElementById('fsboxclear'), clearFsBox, true);
}

export default injectFsBoxContent;
//# sourceMappingURL=injectFsBoxContent-77002c44.js.map
