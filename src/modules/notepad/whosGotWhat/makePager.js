import { paginationDirective } from 'smart-table-core';
import createButton from '../../common/cElement/createButton';
import createDiv from '../../common/cElement/createDiv';
import insertElement from '../../common/insertElement';
import onclick from '../../common/onclick';
import setInnerHtml from '../../dom/setInnerHtml';

const pagerDiv = createDiv();
const firstBtn = createButton({ innerHTML: '«' });
const prevBtn = createButton({ innerHTML: '‹' });
const pageBtn = createButton({ disabled: true, innerHTML: '1' });
const nextBtn = createButton({ innerHTML: '›' });
const lastBtn = createButton({ innerHTML: '»' });

function onSummaryChange(table) {
  let lastPage = 1;
  const pager = paginationDirective({ table });
  pager.onSummaryChange(({ page, size, filteredCount }) => {
    firstBtn.disabled = !pager.isPreviousPageEnabled();
    prevBtn.disabled = !pager.isPreviousPageEnabled();
    nextBtn.disabled = !pager.isNextPageEnabled();
    lastBtn.disabled = !pager.isNextPageEnabled();
    setInnerHtml(page, pageBtn);
    lastPage = Math.ceil(filteredCount / size);
  });
  onclick(lastBtn, () => pager.selectPage(lastPage));
  return pager;
}

export default function makePager(bottom, table) {
  const pager = onSummaryChange(table);
  onclick(firstBtn, () => pager.selectPage(1));
  onclick(prevBtn, () => pager.selectPreviousPage());
  onclick(nextBtn, () => pager.selectNextPage());
  insertElement(pagerDiv, firstBtn);
  insertElement(pagerDiv, prevBtn);
  insertElement(pagerDiv, pageBtn);
  insertElement(pagerDiv, nextBtn);
  insertElement(pagerDiv, lastBtn);
  insertElement(bottom, pagerDiv);
}
