export default async function quickExtract(i) {
  const m = await import('../../../notepad/quickExtract/quickExtract');
  m.default(i);
}
