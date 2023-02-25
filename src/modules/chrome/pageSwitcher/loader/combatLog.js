export default async function combatLog(i) {
  const module = await import('../../../notepad/combatLog/combatLog');
  module.default(i);
}
