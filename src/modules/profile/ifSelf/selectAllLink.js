import sendEvent from '../../analytics/sendEvent';
import createSpan from '../../common/cElement/createSpan';
import clickThis from '../../common/clickThis';
import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import insertElement from '../../common/insertElement';
import insertElementAfterBegin from '../../common/insertElementAfterBegin';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import onclick from '../../common/onclick';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';
import { dropItemsUrl } from '../../support/constants';

function profileSelectAll() {
  sendEvent('profile', 'select all');
  const bpTabs = getElementById('backpack_tabs');
  const type = getElementsByClassName('tab-selected', bpTabs)[0].getAttribute(
    'data-type',
  );
  let items = querySelectorArray(
    `#backpackTab_${type} li:not(.hcsPaginate_hidden) .backpackItem`,
  );
  if (!items.length) return;
  const checkboxes = querySelectorArray(
    `#backpackTab_${
      type
    } li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`,
  );
  if (checkboxes.length > 0) items = checkboxes;
  items.forEach(clickThis);
}

export default function selectAllLink() {
  // select all link
  const node = querySelector(`#profileRightColumn a[href="${dropItemsUrl}"]`);
  if (!node) {
    return;
  }
  const allSpan = createSpan({ className: 'sendLink', textContent: 'All' });
  onclick(allSpan, profileSelectAll);
  const wrapper = createSpan({ innerHTML: '[&nbsp;' });
  insertElement(wrapper, allSpan);
  insertHtmlBeforeEnd(wrapper, '&nbsp;]&nbsp;');
  insertElementAfterBegin(node.parentNode, wrapper);
}
