import { c as calf, aQ as isUndefined } from './calfSystem-d5c49dc8.js';

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
//# sourceMappingURL=doSortParams-4acd571e.js.map
