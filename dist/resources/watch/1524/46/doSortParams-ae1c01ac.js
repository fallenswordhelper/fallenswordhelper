import { c as calf, aU as isUndefined } from './calfSystem-86663d02.js';

function reverseSort(headerClicked) {
  return calf.sortBy && calf.sortBy === headerClicked;
}

function doSortParams(target) {
  const headerClicked = target.getAttribute('sortKey');
  if (isUndefined(calf.sortAsc)) { calf.sortAsc = true; }
  if (reverseSort(headerClicked)) {
    calf.sortAsc = !calf.sortAsc;
  }
  calf.sortBy = headerClicked;
}

export { doSortParams as d };
//# sourceMappingURL=doSortParams-ae1c01ac.js.map
