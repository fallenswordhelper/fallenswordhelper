export default async function injectFindOther(i) {
  const { injectFindOther } = await import(
    '../../../notepad/findBuffs/findBuffs'
  );
  injectFindOther(i);
}
