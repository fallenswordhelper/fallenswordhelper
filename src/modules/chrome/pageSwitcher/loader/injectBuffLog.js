export default async function injectBuffLog(i) {
  const module = await import('../../../notepad/buffLog/injectBuffLog');
  module.default(i);
}
