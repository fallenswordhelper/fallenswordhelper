import regExpFirstCapture from '../common/regExpFirstCapture';
import { defTable } from '../support/constants';

const sortClasses = 'td.sorting, td.sorting_asc, td.sorting_desc';

function calculateSortOrder(target) {
  const classes = target.attr('class');
  const dir = regExpFirstCapture(/sorting(?<dir>[^\s]+)/, classes);
  if (dir === '_desc') { return 'asc'; }
  return 'desc';
}

function sortDataTable(target, myCol, sortOrder) { // jQuery
  const table = target.closest(defTable).DataTable();
  if (myCol !== 3) {
    table.order([3, 'asc'], [myCol, sortOrder]).draw();
  } else {
    table.order([3, sortOrder]).draw();
  }
}

function sortHandler(evt) { // jQuery
  const target = $(evt.target).closest('td');
  const sortOrder = calculateSortOrder(target);
  sortDataTable(target, target.index(), sortOrder);
}

export default function redoSort(tabs) {
  $(sortClasses, tabs).off('click');
  tabs.on('click', sortClasses, sortHandler);
}
