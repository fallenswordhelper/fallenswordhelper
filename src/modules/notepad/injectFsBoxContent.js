import getElementById from '../common/getElementById';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import setInnerHtml from '../dom/setInnerHtml';
import { pcc } from '../support/layout';
import { get, set } from '../system/idb';
import makePageTemplate from './lists/makePageTemplate';

function inject(fsboxcontent) {
  setInnerHtml(fsboxcontent, getElementById('fsboxdetail'));
}

function clearFsBox() {
  set('fsh_fsboxcontent', '');
  window.location.reload();
}

export default function injectFsBoxContent(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const content = injector || pcc();
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
