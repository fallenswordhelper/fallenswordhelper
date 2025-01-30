import indexAjaxData from '../../ajax/indexAjaxData';

export default function auctionCancel(auctionId) {
  return indexAjaxData({
    cmd: 'auctionhouse',
    subcmd: 'cancel',
    auction_id: auctionId,
  });
}
