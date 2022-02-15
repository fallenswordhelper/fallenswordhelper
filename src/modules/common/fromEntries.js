import isIterable from './isIterable';

export default function fromEntries(entries) {
  if (isIterable(entries)) return Object.fromEntries(entries);
}
