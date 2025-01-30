import auctionhouse from "./auctionhouse";

export default function cancel(auctionId) {
  return auctionhouse({
    subcmd: 'cancel',
    auction_id: auctionId,
  });
}
