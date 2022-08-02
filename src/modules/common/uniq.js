import partial from './partial';

function genericFilter(removeBy, seen, item) {
  const myItem = removeBy ? item[removeBy] : item;
  if (!seen.has(myItem)) return seen.add(myItem);
}

export default function uniq(arr, removeBy) {
  return arr.filter(partial(genericFilter, removeBy, new Set()));
}
