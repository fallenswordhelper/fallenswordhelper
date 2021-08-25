export default async function getAsyncData(fn) {
  const json = await fn();
  if (!json.s) {
    throw new Error(json.e.message);
  }
  console.log('getAsyncData', json); // eslint-disable-line no-console
  return json;
}
