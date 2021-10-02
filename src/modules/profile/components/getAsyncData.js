export default async function getAsyncData(fn) {
  const json = await fn();
  if (!json?.s) {
    throw new Error(json?.e?.message ?? 'Unknown Error');
  }
  return json;
}
