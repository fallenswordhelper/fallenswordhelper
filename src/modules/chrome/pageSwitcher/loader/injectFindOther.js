export default async function injectFindOther(i) {
  const m = await import('../../../notepad/findBuffs/findBuffs');
  m.injectFindOther(i);
}
