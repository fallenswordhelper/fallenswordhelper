import indexAjaxData from '../ajax/indexAjaxData';
import cancel from '../app/auctionhouse/cancel';
import $dataAccess from './$dataAccess';

function auctionCancel(auctionId) {
  return indexAjaxData({
    cmd: 'auctionhouse',
    subcmd: 'cancel',
    auction_id: auctionId,
  });
}

export default function daAuctionCancel(auctionId) {
  return $dataAccess(cancel, auctionCancel, auctionId);
}
