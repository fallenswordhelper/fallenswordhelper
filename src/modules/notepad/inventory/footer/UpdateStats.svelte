<script>
  import sendEvent from '../../../analytics/sendEvent';
  import all from '../../../common/all';
  import arrayFrom from '../../../common/arrayFrom';
  import clickThis from '../../../common/clickThis';
  import getElementById from '../../../common/getElementById';
  import calf from '../../../support/calf';
  import { set } from '../../../system/idb';
  import {
    equipable,
    getChunks,
    init,
    itemDetails,
    justItems,
    updateAttr,
  } from './utils';

  let { fshInv } = $props();
  let chunksNeeded = $state(0);
  let chunksReceived = $state(0);

  const api = new DataTable(fshInv);

  async function getItem([ary, pFn, tConst]) {
    const json = await itemDetails(ary, pFn, tConst);
    chunksReceived += 1;
    return json;
  }

  async function updStats(selectorModifier) {
    const rows = api.rows(equipable, selectorModifier);
    const chunks = getChunks(arrayFrom(rows.data()));
    chunksNeeded = chunks.length;
    chunksReceived = 0;
    const responses = await all(chunks.map(getItem));
    rows.every(updateAttr(responses.flatMap(justItems)));
    api.draw();
  }

  const statsEvent = (type) => {
    sendEvent('Inventory', 'Update Stats', type);
  };

  async function updThisPage() {
    statsEvent('On page');
    updStats({ page: 'current' });
  }

  function updAll() {
    statsEvent('All');
    updStats();
  }

  async function clearCache() {
    statsEvent('Clear cache');
    await set(`fsh_${calf.subcmd}_cache`, []);
    clickThis(getElementById('fshRefresh'));
  }

  init(fshInv);

  const explain =
    'This allows you to update the stats of items. It is useful in cases where stats ' +
    'are missing or if you want accurate stats for forged items. It can be slow for large data ' +
    'sets. The results are cached and will be used automatically next time you visit this page. ' +
    'You will need to update again if these stats become stale. For example, if you forged or ' +
    'crafted an item, or if a guild store item has moved.';
</script>

<div class="main">
  <div class="head">
    Update Stats
    <div class="wrapper">
      [
      <div class="tooltip">
        <span class="tooltip-multiline" data-tooltip={explain}>?</span>
      </div>
      ]
    </div>
  </div>
  <div class="btnbox">
    <button class="custombutton" onclick={updThisPage} type="button"
      >On page</button
    >
    <button class="custombutton" onclick={updAll} type="button">All</button>
  </div>
  <div class="btnbox">
    <button class="custombutton" onclick={clearCache} type="button"
      >Clear cache</button
    >
  </div>
  <div class="chunkbox">
    {#if chunksNeeded}
      <div>Chunks needed: <span>{chunksNeeded || ''}</span></div>
      <div>Chunks received: <span>{chunksReceived || ''}</span></div>
    {/if}
  </div>
</div>

<style>
  .main {
    border-color: #333;
    border-radius: 12px;
    border-style: solid;
    border-width: 4px;
    padding: 8px;
    text-align: center;
  }
  .head {
    font-weight: bold;
    padding: 4px;
  }
  .wrapper {
    display: inline-block;
    font-weight: normal;
    word-spacing: -0.3ch;
  }
  .tooltip {
    border-bottom: 1px dotted black;
    display: inline-block;
    position: relative;
    word-spacing: normal;
  }
  .btnbox {
    padding: 4px;
  }
  button {
    font-family: inherit;
    font-size: inherit;
  }
  .chunkbox {
    height: 26px;
  }
</style>
