import Trade from './Trade.svelte';
import getElementById from '../common/getElementById';
import oneByOne from './oneByOne';
import task from '../support/task';

function startTrade(itemList) {
  return new Trade({
    anchor: itemList,
    props: { itemList },
    target: itemList.parentNode,
  });
}

export default function trade() {
  const itemList = getElementById('item-list');
  if (!itemList) { return; }
  startTrade(itemList);
  task(3, oneByOne);
}
