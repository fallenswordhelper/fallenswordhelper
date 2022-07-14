import { paginationDirective } from 'smart-table-core';
import createDiv from '../../common/cElement/createDiv';
import createSelect from '../../common/cElement/createSelect';
import insertElement from '../../common/insertElement';
import on from '../../common/on';

export default function makeSizer(el, table) {
  const thisSizer = createSelect({
    innerHTML: '<option value="25">25</option>'
      + '<option value="50">50</option>'
      + '<option value="0" selected>All</option>',
  });
  const box = createDiv();
  insertElement(box, thisSizer);
  insertElement(el, box);
  const slice = paginationDirective({ table });
  on(thisSizer, 'change', (e) => {
    slice.changePageSize(Number(e.target.value));
  });
}
