import runDefault from '../../common/runDefault';

const injectAuctionHouse = () => { runDefault(import('../../auctionHouse/injectAuctionHouse')); };
const quickCreate = () => { runDefault(import('../../auctionHouse/quickCreate')); };

export default {
  '-': { '-': injectAuctionHouse },
  quickcreate: { '-': quickCreate },
};
