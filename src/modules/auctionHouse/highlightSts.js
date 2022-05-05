import arrayFrom from '../common/arrayFrom';
import getElementById from '../common/getElementById';
import getInvId from './getInvId';
import partial from '../common/partial';

function highlightItem(inv, d) {
  const [thisItem] = d.children[0].children;
  if (inv.items[getInvId(thisItem)].is_in_st) thisItem.style.backgroundColor = 'rgba(255,0,0,0.3)';
}

function hazMo(inv, mutations) {
  mutations
    .filter((m) => m.addedNodes?.[0]?.tagName === 'DIV')
    .forEach((m) => {
      highlightItem(inv, m.addedNodes[0]);
    });
}

export default function highlightSts(inv) {
  const auctionItems = getElementById('auction-items');
  arrayFrom(auctionItems.children).forEach(partial(highlightItem, inv));
  const observer = new MutationObserver(partial(hazMo, inv));
  observer.observe(auctionItems, { childList: true });
}
