export default async function injectFindBuffs(i) {
  const { injectFindBuffs } = await import(
    '../../../notepad/findBuffs/findBuffs'
  );
  injectFindBuffs(i);
}
