import calf from '../support/calf';
import isUndefined from './isUndefined';

function reverseSort(headerClicked) {
  return calf.sortBy && calf.sortBy === headerClicked;
}

export default function doSortParams(target) {
  const headerClicked = target.getAttribute('sortKey');
  if (isUndefined(calf.sortAsc)) { calf.sortAsc = true; }
  if (reverseSort(headerClicked)) {
    calf.sortAsc = !calf.sortAsc;
  }
  calf.sortBy = headerClicked;
}
