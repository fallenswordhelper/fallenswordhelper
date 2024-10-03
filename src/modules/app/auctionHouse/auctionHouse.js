import getApp from '../getApp';

export default function auctionhouse(data) {
  return getApp({ cmd: 'auctionhouse', ...data });
}
