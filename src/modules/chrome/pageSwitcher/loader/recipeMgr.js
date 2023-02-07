export default async function recipeMgr(i) {
  const module = await import('../../../notepad/recipeMgr/recipeMgr');
  module.default(i);
}
