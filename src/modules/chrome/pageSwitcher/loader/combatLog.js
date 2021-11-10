export default async function combatLog(i) {
  const m = await import('../../../notepad/combatLog/combatLog');
  m.default(i);
}
