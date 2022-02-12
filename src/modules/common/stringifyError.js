import jsonStringify from './jsonStringify';

export default function stringifyError(err) {
  return jsonStringify(
    err,
    Object.getOwnPropertyNames(Object.getPrototypeOf(err)),
    1,
  ).replace(/\n/g, '');
}
