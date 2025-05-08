export default async function injectOnlinePlayers(i) {
  const module = await import(
    '../../../notepad/onlinePlayers/injectOnlinePlayers'
  );
  module.default(i);
}
