import isUndefined from '../common/isUndefined';
import calf from '../support/calf';
import path from './path';
import sortDesc from './sortDesc';

function intFromString(val) {
  if (typeof val === 'string') {
    return parseInt(val.replace(/[,#]/g, ''), 10);
  }
  return val;
}

function aIsNotEquipment(a) {
  return !isUndefined(a.type) && a.type > 8;
}

function bIsNotEquipment(a, b) {
  return !isUndefined(a.type) && b.type > 8;
}

export default function numberSort(a, b) {
  if (aIsNotEquipment(a)) { return 1; } // non equipment items
  if (bIsNotEquipment(a, b)) { return -1; }
  let valueA = path(a, calf.sortBy, 1);
  let valueB = path(b, calf.sortBy, 1);
  valueA = intFromString(valueA);
  valueB = intFromString(valueB);
  const result = valueA - valueB;
  return sortDesc(result);
}
