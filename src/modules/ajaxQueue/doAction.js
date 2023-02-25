export default async function doAction(fn, item, data) {
  await fn(item);
  return data;
}
