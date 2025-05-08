import all from './all';

// https://advancedweb.hu/how-to-use-async-functions-with-array-filter-in-javascript/
export default async function asyncFilter(arr, predicate) {
  const results = await all(arr.map(predicate));
  return arr.filter((_v, index) => results[index]);
}
