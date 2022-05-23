<script>
  import FolderButtons from '../common/FolderButtons.svelte';
  import QuickSelectClasses from '../common/QuickSelectClasses.svelte';
  import SelectInST from '../common/SelectInST.svelte';
  import TradeGrid from './TradeGrid.svelte';
  import calf from '../support/calf';
  import closestTable from '../common/closestTable';
  import getValue from '../system/getValue';
  import inventory from '../_dataAccess/export/inventory';
  import numberIsNaN from '../common/numberIsNaN';
  import partial from '../common/partial';
  import querySelectorArray from '../common/querySelectorArray';
  import sendEvent from '../analytics/sendEvent';
  import toggleForce from '../common/toggleForce';

  export let itemList = 0;

  let drawGrid = 0;
  let folders = 0;
  let howMany = 'all';
  let inSt = getValue('selectST');
  let itemTables = 0;
  let itemVisibility = 0;

  const getItem = (items, invId) => items.find(({ inv_id: iid }) => iid === invId);

  async function getInv() {
    const prm = inventory();
    const checkboxes = querySelectorArray('[name="sendItemList[]"]', itemList.parentNode);
    const invIds = checkboxes.map((c) => [c, closestTable(c), Number(c.value)]);
    const inv = await prm;
    folders = inv.folders;
    itemTables = invIds.map(([c, table, invId]) => [c, table, getItem(inv.items, invId)]);
    itemVisibility = itemTables.map((x) => [...x, true]);
    itemTables
      .filter(([, , itm]) => itm.is_in_st)
      .forEach(([, tbl]) => { tbl.classList.add('isInST'); });
  }

  const selectType = [
    [(selectId) => selectId === -1, () => true],
    [(selectId) => selectId === -2, (_selectId, [, , itm]) => itm.type === 12],
    [(selectId) => selectId === -3, (_selectId, [, , itm]) => itm.guild_tag >= 0],
    [() => true, (selectId, [, , itm]) => selectId === itm.item_id],
  ];

  const doCheck = (bool, ctx) => { ctx.checked = bool; };
  const unCheckAll = ([checkbox]) => { doCheck(false, checkbox); };
  const checkAll = ([checkbox]) => { doCheck(true, checkbox); };

  function getHowMany() {
    let thisMany = parseInt(howMany, 10);
    if (numberIsNaN(thisMany)) thisMany = itemTables.length;
    if (calf.subcmd !== '-') return Math.min(100, thisMany);
    return thisMany;
  }

  function doSelect(e) {
    sendEvent('Trade', 'doSelect', e.detail);
    itemTables.forEach(unCheckAll);
    const selectId = Number(e.detail);
    const [, filterFn] = selectType.find(([s]) => s(selectId));
    itemVisibility
      .filter(partial(filterFn, selectId))
      .filter(([, , , v]) => v)
      .filter(([, , itm]) => inSt || !itm.is_in_st)
      .slice(0, getHowMany())
      .forEach(checkAll);
  }

  function doToggle() {
    sendEvent('Trade', 'toggleSelectST');
  }

  const isVisible = (folderId, itm) => folderId === -2 || folderId === itm.folder_id;
  const visibility = (folderId, [c, tbl, itm]) => [c, tbl, itm, isVisible(folderId, itm)];
  const toggleVisibility = ([, tbl, , visible]) => { toggleForce(tbl, !visible); };

  function doFilter(e) {
    sendEvent('Trade', 'doFilter');
    toggleForce(itemList, true);
    itemVisibility = itemTables.map(partial(visibility, Number(e.detail)));
    itemVisibility.forEach(toggleVisibility);
    itemTables.forEach(unCheckAll);
    drawGrid = 1;
  }
</script>

{#await getInv() then}
  <div>
    <QuickSelectClasses bind:howMany on:select={doSelect} wantsTagged=1/>
  </div>
  <div>
    <SelectInST bind:inSt on:toggle={doToggle}/>
  </div>
  <div>
    <FolderButtons {folders} on:filter={doFilter}/>
  </div>
{/await}
{#if (drawGrid)}
  <TradeGrid {itemList}/>
{/if}

<style>
  :global(#item-list center) {
    width: 60px;
  }
  :global(.isInST) {
    background-color: red;
  }
  div:nth-of-type(2) {
    margin: 2px auto;
    text-align: center;
  }
  div:nth-of-type(3) {
    --button-color: black;
    --button-margin: auto 3px;
    margin: 2px auto;
  }
</style>
