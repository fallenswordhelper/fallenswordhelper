import entries from './entries';

export default function objectToMap(obj) {
  return new Map(entries(obj));
}
