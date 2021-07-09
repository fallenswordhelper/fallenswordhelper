export default function doAction(fn, item, data) {
  return fn(item).then(() => data);
}
