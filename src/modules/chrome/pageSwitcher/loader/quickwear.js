export default async function quickwear(i) {
  const module = await import('../../../notepad/quickWear/quickWear');
  module.default(i);
}
