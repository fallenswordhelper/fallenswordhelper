import cancel from '../app/auctionhouse/cancel';
import $dataAccess from './$dataAccess';
import auctionCancel from './fallbacks/auctionCancel';

export default function daAuctionCancel(auctionId) {
  return $dataAccess(cancel, auctionCancel, auctionId);
}
