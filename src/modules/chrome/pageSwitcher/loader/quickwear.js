export default async function quickwear(i) {
  const m = await import('../../../notepad/quickWear/quickWear');
  m.default(i);
}
