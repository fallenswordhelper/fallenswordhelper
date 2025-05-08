// https://advancedweb.hu/how-to-use-async-functions-with-array-some-and-every-in-javascript/
export default async function asyncSome(arr, predicate) {
  for (const e of arr) {
    if (await predicate(e)) return true; // eslint-disable-line no-await-in-loop
  }
  return false;
}
