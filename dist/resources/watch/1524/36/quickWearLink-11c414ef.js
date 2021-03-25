import { E as querySelector, aa as cmdUrl, i as insertElement, o as onclick, Y as sendEvent, Z as jQueryDialog, cd as insertQuickWear } from './calfSystem-c08399e5.js';
import { c as createSpan } from './createSpan-e69e09da.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-a4b0c038.js';

function openQwDialog() {
  sendEvent('profile', 'insertQuickWear');
  jQueryDialog(insertQuickWear);
}

function quickWearLink() {
  // quick wear manager link
  const node = querySelector(`#profileRightColumn a[href="${cmdUrl
  }profile&subcmd=togglesection&section_id=2"]`);
  if (!node) { return; }
  const wrap = createSpan({ innerHTML: '&nbsp;[' });
  const qw = createSpan({ className: 'sendLink', innerHTML: 'Quick&nbsp;Wear' });
  insertElement(wrap, qw);
  insertTextBeforeEnd(wrap, ']');
  insertElement(node.parentNode, wrap);
  onclick(qw, openQwDialog);
}

export default quickWearLink;
//# sourceMappingURL=quickWearLink-11c414ef.js.map
