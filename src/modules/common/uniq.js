import arrayFrom from './arrayFrom';

export default function uniq(arr, removeBy) {
  if (removeBy) {
    const seen = new Set();
    return arr.filter((item) => (!seen.has(item[removeBy]) ? seen.add(item[removeBy]) : 0));
  }
  return arrayFrom(new Set(arr));
}
