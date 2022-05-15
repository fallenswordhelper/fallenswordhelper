<script>
  import alpha from '../../common/alpha';
  import getValueJSON from '../../system/getValueJSON';
  import uniq from '../../common/uniq';
  import { ahSearchUrl, auctionSearchUrl } from '../../support/constants';

  export let itemList = 0;

  const itemCount = uniq(itemList.items, 'n').map(({ n }) => ({
    n,
    count: itemList.items.filter(({ n: fn }) => fn === n).length,
  }));

  const quickSearchList = getValueJSON('quickSearchList') || [];
  const quickSL = uniq(quickSearchList, 'searchname')
    .sort((a, b) => alpha(a.searchname, b.searchname));

  const hasItem = ({ searchname }) => itemCount.some(({ n }) => n === searchname);
  const foundItems = quickSL.filter(hasItem).map(({ nickname, searchname }) => ({
    nickname,
    searchname,
    count: itemCount.find(({ n }) => n === searchname).count,
  }));

  const notThere = ({ searchname }) => !itemCount.some(({ n }) => n === searchname);
  const notFound = quickSL.filter(notThere).map(({ nickname, searchname }) => ({
    nickname,
    searchname,
  }));

  const others = ({ n }) => !foundItems.some(({ searchname }) => searchname === n);
  const otherItems = itemCount.filter(others);
</script>

<table>
  <caption>
    Items from
    <a href="{auctionSearchUrl}">AH Quick Search</a>
    found in your inventory
  </caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Nick Name</th>
      <th>Inv Count</th>
    </tr>
  </thead>
  <tbody>
    {#each foundItems as { nickname, searchname, count }}
      <tr>
        <td>{searchname}</td>
        <td><a href="{ahSearchUrl}{searchname}">{nickname}</a></td>
        <td>{count}</td>
      </tr>
    {/each}
  </tbody>
</table>
<hr>
<div>
  <span>Did not find:</span>
  <span>
    {#each notFound as { nickname, searchname }, index}
      {#if index > 0},{/if}
      <a href="{ahSearchUrl}{searchname}">{nickname}</a>
    {/each}
  </span>
</div>
<hr>
<table>
  <caption>
    Items NOT from
    <a href="{auctionSearchUrl}">AH Quick Search</a>
    found in your inventory
  </caption>
  <tbody>
    {#each otherItems as { n, count }}
      <tr>
        <td>{n}</td>
        <td></td>
        <td>{count}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    table-layout: fixed;
    width: 100%;
  }
  caption {
    padding-bottom: 0.2em;
    text-align: center;
  }
  th {
    font-weight: bold;
    padding-bottom: 0.1em;
  }
  th:nth-child(1),
  td:nth-child(1) {
    width: 40%;
  }
  th:nth-child(2),
  td:nth-child(2) {
    width: 40%;
  }
  th:nth-child(3),
  td:nth-child(3) {
    width: 20%;
  }
  tbody tr:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
</style>
