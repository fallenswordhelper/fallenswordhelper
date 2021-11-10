export default async function injectFsBoxContent(i) {
  const m = await import('../../../notepad/injectFsBoxContent');
  m.default(i);
}
