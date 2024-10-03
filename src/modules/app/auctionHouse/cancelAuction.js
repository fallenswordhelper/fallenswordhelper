import auctionHouse from './auctionHouse';

export default function cancelAuction(auctionId) {
  return auctionHouse({
    subcmd: 'cancel',
    auction_id: auctionId,
  });
}
