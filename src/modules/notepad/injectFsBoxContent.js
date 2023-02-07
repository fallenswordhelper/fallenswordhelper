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

export default async function injectFsBoxContent(injector) {
  if (jQueryNotPresent()) { return; }
  const content = injector || pcc();
  setInnerHtml(makePageTemplate({
    title: 'FS Box Log',
    comment: '',
    spanId: 'fsboxclear',
    button: 'Clear',
    divId: 'fsboxdetail',
  }), content);
  onclick(getElementById('fsboxclear'), clearFsBox, true);
  const txt = await get('fsh_fsboxcontent');
  inject(txt);
}
