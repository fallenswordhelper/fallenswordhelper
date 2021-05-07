import { cmdUrl } from '../../support/constants';
import createSpan from '../../common/cElement/createSpan';
import insertElement from '../../common/insertElement';
import { insertQuickWear } from '../../chrome/pageSwitcher/loader';
import insertTextBeforeEnd from '../../common/insertTextBeforeEnd';
import jQueryDialog from '../../chrome/jQueryDialog';
import onclick from '../../common/onclick';
import querySelector from '../../common/querySelector';
import sendEvent from '../../analytics/sendEvent';

function openQwDialog() {
  sendEvent('profile', 'insertQuickWear');
  jQueryDialog(insertQuickWear);
}

export default function quickWearLink() {
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
