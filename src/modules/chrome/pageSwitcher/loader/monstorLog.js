export default async function monstorLog(i) {
  const m = await import('../../../notepad/monstorLog/monstorLog');
  m.default(i);
}
