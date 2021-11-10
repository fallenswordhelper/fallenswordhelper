export default async function injectAuctionSearch(i) {
  const m = await import('../../../notepad/lists/lists');
  m.injectAuctionSearch(i);
}
