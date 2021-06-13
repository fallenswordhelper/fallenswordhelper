import { E as querySelector, a9 as cmdUrl, i as insertElement, o as onclick, T as sendEvent, Y as jQueryDialog, ce as insertQuickWear } from './calfSystem-02fd040d.js';
import { c as createSpan } from './createSpan-d9a55780.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-aa71ccc4.js';

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
//# sourceMappingURL=quickWearLink-b0172fc3.js.map
