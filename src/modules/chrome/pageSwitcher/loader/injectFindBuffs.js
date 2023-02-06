export default async function injectFindBuffs(i) {
  const module = await import('../../../notepad/findBuffs/findBuffs');
  module.injectFindBuffs(i);
}
