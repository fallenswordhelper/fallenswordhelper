import { E as querySelector, a9 as cmdUrl, i as insertElement, o as onclick, T as sendEvent, Y as jQueryDialog, ce as insertQuickWear } from './calfSystem-86663d02.js';
import { c as createSpan } from './createSpan-629b0f07.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-f79bfe63.js';

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
//# sourceMappingURL=quickWearLink-7b5539a3.js.map
