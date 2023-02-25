export default async function injectFsBoxContent(i) {
  const module = await import('../../../notepad/injectFsBoxContent');
  module.default(i);
}
