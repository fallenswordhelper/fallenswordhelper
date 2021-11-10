export default async function injectFindBuffs(i) {
  const m = await import('../../../notepad/findBuffs/findBuffs');
  m.injectFindBuffs(i);
}
