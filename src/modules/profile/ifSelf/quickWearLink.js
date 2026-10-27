import sendEvent from '../../analytics/sendEvent';
import jQueryDialog from '../../chrome/jQueryDialog/jQueryDialog';
import quickwear from '../../chrome/pageSwitcher/loader/quickwear';
import createSpan from '../../common/cElement/createSpan';
import insertElement from '../../common/insertElement';
import insertElementAfterBegin from '../../common/insertElementAfterBegin';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import hrefIs from '../../common/hrefIs';
import onclick from '../../common/onclick';
import querySelectorArray from '../../common/querySelectorArray';
import { cmdUrl } from '../../support/constants';

function openQwDialog() {
  sendEvent('profile', 'insertQuickWear');
  jQueryDialog(quickwear);
}

export default function quickWearLink() {
  // quick wear manager link
  const node = querySelectorArray('#profileRightColumn a').find(
    hrefIs(`${cmdUrl}profile&subcmd=togglesection&section_id=2`),
  );
  if (!node) {
    return;
  }
  const wrap = createSpan({ innerHTML: '[&nbsp;' });
  const qw = createSpan({
    className: 'sendLink',
    innerHTML: 'Quick&nbsp;Wear',
  });
  insertElement(wrap, qw);
  insertHtmlBeforeEnd(wrap, '&nbsp;]&nbsp;');
  insertElementAfterBegin(node.parentNode, wrap);
  onclick(qw, openQwDialog);
}
