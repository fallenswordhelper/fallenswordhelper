import getElementById from '../common/getElementById';
import task from '../support/task';
import oneByOne from './oneByOne';
import Trade from './Trade.svelte';

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
