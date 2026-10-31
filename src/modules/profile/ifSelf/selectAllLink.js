import sendEvent from '../../analytics/sendEvent';
import createSpan from '../../common/cElement/createSpan';
import clickThis from '../../common/clickThis';
import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import hrefIs from '../../common/hrefIs';
import insertElement from '../../common/insertElement';
import insertElementAfterBegin from '../../common/insertElementAfterBegin';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import onclick from '../../common/onclick';
import querySelectorArray from '../../common/querySelectorArray';
import { dropItemsUrl } from '../../support/constants';

// A plain click on an item makes the game equip or use it; Ctrl-click selects.
function ctrlClick(el) {
  el.dispatchEvent(
    new MouseEvent('click', { bubbles: true, cancelable: true, ctrlKey: true }),
  );
}

function profileSelectAll() {
  sendEvent('profile', 'select all');
  const bpTabs = getElementById('backpack_tabs');
  const type = getElementsByClassName('tab-selected', bpTabs)[0]?.getAttribute(
    'data-type',
  );
  // Skip slots fast wear has emptied.
  const slots = `#backpackTab_${type} li:not(.hcsPaginate_hidden) .backpackSlot:not(.fastDone)`;
  const checkboxes = querySelectorArray(
    `${slots} .backpackCheckbox:not(:disabled)`,
  );
  if (checkboxes.length > 0) {
    checkboxes.forEach(clickThis);
    return;
  }
  querySelectorArray(`${slots} .backpackItem`).forEach(ctrlClick);
}

export default function selectAllLink() {
  // select all link
  const node = querySelectorArray('#profileRightColumn a').find(
    hrefIs(dropItemsUrl),
  );
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
