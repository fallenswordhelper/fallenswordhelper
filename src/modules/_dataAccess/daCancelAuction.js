import cancelAuction from '../app/auctionHouse/cancelAuction';
import $dataAccess from './$dataAccess';
import fallback from './fallbacks/cancelAuction';

export default function daCancelAuction(auctionId) {
  return $dataAccess(cancelAuction, fallback, auctionId);
}
