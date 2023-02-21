export default async function injectAuctionSearch(i) {
  const module = await import('../../../notepad/lists/lists');
  module.injectAuctionSearch(i);
}
