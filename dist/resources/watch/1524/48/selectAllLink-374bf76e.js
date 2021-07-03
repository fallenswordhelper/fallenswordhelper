import { E as querySelector, cc as dropItemsUrl, o as onclick, i as insertElement, f as insertHtmlBeforeEnd, z as getElementById, M as getElementsByClassName, F as querySelectorArray, R as clickThis } from './calfSystem-2bd62864.js';
import { c as createSpan } from './createSpan-1b6c0349.js';

function profileSelectAll() {
  const bpTabs = getElementById('backpack_tabs');
  const type = getElementsByClassName('tab-selected', bpTabs)[0]
    .getAttribute('data-type');
  let items = querySelectorArray(`#backpackTab_${type
  } li:not(.hcsPaginate_hidden) .backpackItem`);
  if (items.length === 0) { return; }
  const checkboxes = querySelectorArray(`#backpackTab_${type
  } li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`);
  if (checkboxes.length > 0) { items = checkboxes; }
  items.forEach(clickThis);
}

function selectAllLink() {
  // select all link
  const node = querySelector(`#profileRightColumn a[href="${
    dropItemsUrl}"]`);
  if (!node) { return; }
  const allSpan = createSpan({ className: 'smallLink', textContent: 'All' });
  onclick(allSpan, profileSelectAll);
  const wrapper = createSpan({ innerHTML: '[&nbsp;' });
  insertElement(wrapper, allSpan);
  insertHtmlBeforeEnd(wrapper, '&nbsp;]&nbsp;');
  insertElement(node.parentNode, wrapper);
}

export default selectAllLink;
//# sourceMappingURL=selectAllLink-374bf76e.js.map
