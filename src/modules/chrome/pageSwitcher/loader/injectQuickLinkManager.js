export default async function injectQuickLinkManager(i) {
  const module = await import('../../../notepad/lists/lists');
  module.injectQuickLinkManager(i);
}
