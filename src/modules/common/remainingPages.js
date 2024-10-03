export default function remainingPages(number, fn) {
  return Array(number - 1)
    .fill(1)
    .map((_e, i) => fn(i + 2));
}
