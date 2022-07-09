import getElementById from '../common/getElementById';
import { getPcc } from '../support/layout';
import jQueryNotPresent from '../common/jQueryNotPresent';
import makePageTemplate from './lists/makePageTemplate';
import onclick from '../common/onclick';
import setInnerHtml from '../dom/setInnerHtml';
import { get, set } from '../system/idb';

function inject(fsboxcontent) {
  setInnerHtml(fsboxcontent, getElementById('fsboxdetail'));
}

function clearFsBox() {
  set('fsh_fsboxcontent', '');
  window.location.reload();
}

export default function injectFsBoxContent(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const content = injector || getPcc();
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
