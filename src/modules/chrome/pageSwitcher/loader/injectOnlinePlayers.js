export default async function injectOnlinePlayers(i) {
  const m = await import('../../../notepad/onlinePlayers/injectOnlinePlayers');
  m.default(i);
}
