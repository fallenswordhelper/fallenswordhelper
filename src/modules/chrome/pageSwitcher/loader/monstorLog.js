export default async function monstorLog(i) {
  const module = await import('../../../notepad/monstorLog/monstorLog');
  module.default(i);
}
