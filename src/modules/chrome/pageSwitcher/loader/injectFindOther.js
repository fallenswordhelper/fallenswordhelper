export default async function injectFindOther(i) {
  const module = await import('../../../notepad/findBuffs/findBuffs');
  module.injectFindOther(i);
}
