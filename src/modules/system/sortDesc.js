import calf from '../support/calf';

export default function sortDesc(result) {
  if (calf.sortAsc) {
    return result;
  }
  return -result;
}
