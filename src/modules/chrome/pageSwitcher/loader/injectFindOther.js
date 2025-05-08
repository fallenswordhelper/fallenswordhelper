export default async function injectFindOther(i) {
  const { injectFindOther: ifo } = await import(
    '../../../notepad/findBuffs/findBuffs'
  );
  ifo(i);
}
