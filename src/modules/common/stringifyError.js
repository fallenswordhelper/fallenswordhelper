export default function stringifyError(err) {
  return JSON.stringify(
    err,
    Object.getOwnPropertyNames(Object.getPrototypeOf(err)),
    1,
  ).replace(/\n/g, '');
}
