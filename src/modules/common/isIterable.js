export default function isIterable(obj) {
  return typeof obj?.[Symbol.iterator] === 'function';
}
