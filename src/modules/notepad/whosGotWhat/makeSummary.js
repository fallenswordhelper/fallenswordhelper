import { paginationDirective } from 'smart-table-core';
import createDiv from '../../common/cElement/createDiv';
import insertElement from '../../common/insertElement';
import setInnerHtml from '../../dom/setInnerHtml';

export default function makeSummary(bottom, table, data) {
  const summaryDiv = createDiv();
  insertElement(bottom, summaryDiv);
  const slice = paginationDirective({ table });
  slice.onSummaryChange(({ page, size, filteredCount }) => {
    let filterModifier = 0;
    if (filteredCount) { filterModifier = 1; }
    setInnerHtml(`showing ${
      (page - 1) * size + filterModifier} - ${
      Math.min(filteredCount, page * size)} of ${
      filteredCount} (${data.length} total)`, summaryDiv);
  });
}
