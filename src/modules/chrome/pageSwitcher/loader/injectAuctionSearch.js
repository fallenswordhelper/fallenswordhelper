export default async function injectAuctionSearch(i) {
  const module = await import('../../../notepad/lists/injectAuctionSearch');
  module.default(i);
}
