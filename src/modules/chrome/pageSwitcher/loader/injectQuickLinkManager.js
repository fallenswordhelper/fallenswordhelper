export default async function injectQuickLinkManager(i) {
  const m = await import('../../../notepad/lists/lists');
  m.injectQuickLinkManager(i);
}
