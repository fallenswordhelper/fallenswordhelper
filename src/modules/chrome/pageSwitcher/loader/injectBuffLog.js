export default async function injectBuffLog(i) {
  const m = await import('../../../notepad/buffLog/injectBuffLog');
  m.default(i);
}
