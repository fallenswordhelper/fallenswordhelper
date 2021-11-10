export default async function recipeMgr(i) {
  const m = await import('../../../notepad/recipeMgr/recipeMgr');
  m.default(i);
}
