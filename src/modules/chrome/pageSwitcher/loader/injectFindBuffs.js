export default async function injectFindBuffs(i) {
  const { injectFindBuffs: ifb } = await import(
    '../../../notepad/findBuffs/findBuffs'
  );
  ifb(i);
}
