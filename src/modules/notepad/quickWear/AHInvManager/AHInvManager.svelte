<script>
  import VirtualScroll from 'svelte-virtual-scroll-list';
  import alpha from '../../../common/alpha';
  import uniq from '../../../common/uniq';
  import getValueJSON from '../../../system/getValueJSON';
  import getHeightGuess from '../getHeightGuess';
  import Caption from './Caption.svelte';
  import Header from './Header.svelte';
  import Hr from './Hr.svelte';
  import ListItem from './ListItem.svelte';
  import NotFound from './NotFound.svelte';

  export let itemList = 0;

  const itemCount = uniq(itemList.items, 'n').map(({ n }) => ({
    n,
    count: itemList.items.filter(({ n: fn }) => fn === n).length,
  }));

  const quickSearchList = getValueJSON('quickSearchList') || [];
  const quickSL = uniq(quickSearchList, 'searchname')
    .sort((a, b) => alpha(a.searchname, b.searchname));

  const hasItem = ({ searchname }) => itemCount.some(({ n }) => n === searchname);
  const foundItems = quickSL.filter(hasItem).map(({ nickname, searchname }, index) => ({
    component: ListItem,
    data: {
      count: itemCount.find(({ n }) => n === searchname).count,
      nickname,
      odd: index % 2,
      searchname,
    },
    id: index + 3,
  }));

  const notThere = ({ searchname }) => !itemCount.some(({ n }) => n === searchname);

  const others = ({ n }) => !foundItems.some(({ searchname }) => searchname === n);
  const otherItems = itemCount.filter(others).map(({ n, count }, index) => ({
    component: ListItem,
    data: {
      count,
      odd: index % 2,
      searchname: n,
    },
    id: index + foundItems.length + 7,
  }));

  const theStuff = [
    { component: Caption, id: 1 },
    { component: Header, id: 2 },
    ...foundItems,
    { component: Hr, id: foundItems.length + 3 },
    { component: NotFound, data: quickSL.filter(notThere), id: foundItems.length + 4 },
    { component: Hr, id: foundItems.length + 5 },
    { component: Caption, data: 'NOT', id: foundItems.length + 6 },
    ...otherItems,
  ];
</script>

<div class="vs">
  <VirtualScroll
    data={theStuff}
    key="id"
    keeps="{Math.floor(getHeightGuess() / 10)}"
    estimateSize="14"
    let:data={item}
  >
    <svelte:component this={item.component} data={item.data}/>
  </VirtualScroll>
</div>

<style>
  .vs {
    height: calc(100vh - 200px);
    overflow-y: auto;
  }
</style>
