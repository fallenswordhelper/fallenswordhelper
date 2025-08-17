<script>
  import inventory from '../_dataAccess/export/inventory';
  import calf from '../support/calf';
  import defaults from '../support/dataObj.json';
  import getValue from '../system/getValue';
  import arrayfromList from './arrayfromList';
  import createStyle from './cElement/createStyle';
  import clickThis from './clickThis';
  import entries from './entries';
  import fromEntries from './fromEntries';
  import insertElement from './insertElement';
  import LinkBtn from './LinkBtn.svelte';
  import numberIsNaN from './numberIsNaN';
  import partial from './partial';
  import querySelectorArray from './querySelectorArray';
  import SelectInST from './SelectInST.svelte';

  let {
    dispatchPerf,
    dispatchSelect,
    dispatchToggle,
    wantsTagged = 0,
  } = $props();

  let howMany = $state(null);
  let inSt = $state(null);
  let inv = $state(null);

  howMany = 'all';

  async function getInv() {
    const myData = await inventory();
    if (myData?.items) {
      inv = { items: fromEntries(myData?.items.map((o) => [o.inv_id, o])) };
    }
  }

  function getItemList() {
    const sendClasses = getValue('sendClasses');
    return arrayfromList(sendClasses) ?? arrayfromList(defaults.sendClasses);
  }

  const selectType = [
    [(selectId) => selectId === -1, () => true],
    [(selectId) => selectId === -2, (_selectId, [, itm]) => itm.type === 12],
    [(selectId) => selectId === -3, (_selectId, [, itm]) => itm.guild_tag >= 0],
    [
      (selectId) => selectId === -99,
      (_selectId, [, itm]) => itm?.craft === 'Perfect',
    ],
    [() => true, (selectId, [, itm]) => selectId === itm?.item_id],
  ];

  function deselectAll() {
    querySelectorArray('[class$="-create-selected"] div').forEach(clickThis);
  }

  function getHowMany() {
    let thisMany = parseInt(howMany, 10);
    if (numberIsNaN(thisMany)) thisMany = entries(inv.items).length;
    return calf.subcmd === 'createsecure' ? Math.min(100, thisMany) : thisMany;
  }

  const getItemObj = (div) => [div, inv.items[div.id.split('-').at(-1)]];
  const stFilter = ([, itm]) => inSt || !itm.is_in_st;
  const justDiv = ([div]) => div;

  function doSelection(id, items) {
    const selectId = Number(id);
    const [, filterFn] = selectType.find(([s]) => s(selectId));
    items
      .map(getItemObj)
      .filter(partial(filterFn, selectId))
      .filter(stFilter)
      .slice(0, getHowMany())
      .map(justDiv)
      .forEach(clickThis);
  }

  function doType(id) {
    const items = querySelectorArray('.selectable-item');
    if (items.length) {
      deselectAll();
      doSelection(id, items);
    }
  }

  function doSelect(id) {
    dispatchSelect(id);
    doType(id);
  }

  function doPerf() {
    dispatchPerf();
    doType('-99');
  }

  const isInSt = ([, obj]) => obj.is_in_st;
  const itemStyle = ([, obj]) => `div[id$="-highlight-${
    obj.inv_id
  }"]:not([class$="-create-selected"]) {
    background-color: rgba(255, 0, 0, 0.3);
  }`;
  const styleSheet = () =>
    createStyle(entries(inv.items).filter(isInSt).map(itemStyle).join('\n'));

  function highlightSts(node) {
    if (!inv.items.fshHasST) return;
    insertElement(node, styleSheet());
  }
</script>

{#await getInv() then}
  {#if inv?.items}
    <div>
      Select:
      <LinkBtn onclick={() => doSelect('-1')}>All Items</LinkBtn>
      <LinkBtn onclick={() => doSelect('-2')}>All Resources</LinkBtn>
      {#if wantsTagged}
        <LinkBtn onclick={() => doSelect('-3')}>Guild Tagged</LinkBtn>
      {/if}
      {#each getItemList() as [name, id], x (x)}
        <LinkBtn onclick={() => doSelect(id)}>{name}</LinkBtn>
      {/each}
      How many:<input bind:value={howMany} class="custominput" type="text" />
    </div>
    <div use:highlightSts>
      <SelectInST bind:inSt {dispatchToggle} />
    </div>
    <div>
      <LinkBtn --button-color="blue" onclick={doPerf}>Perfect</LinkBtn>
    </div>
  {:else}
    <p style="color: red">Server Error</p>
  {/if}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
  div {
    --button-color: black;
    --button-margin: auto 3px;
    margin: 10px auto 10px auto;
    text-align: center;
  }
  input {
    width: 32px;
  }
</style>
