<script>
import { createEventDispatcher } from 'svelte';
import getInventoryById from '../ajax/getInventoryById';
import calf from '../support/calf';
import defaults from '../support/dataObj.json';
import getValue from '../system/getValue';
import arrayfromList from './arrayfromList';
import createStyle from './cElement/createStyle';
import clickThis from './clickThis';
import entries from './entries';
import insertElement from './insertElement';
import LinkButton from './LinkButton.svelte';
import numberIsNaN from './numberIsNaN';
import partial from './partial';
import querySelectorArray from './querySelectorArray';
import SelectInST from './SelectInST.svelte';

const dispatch = createEventDispatcher();

export let wantsTagged = 0;
let howMany = null;
let inSt = null;
let inv = null;

howMany = 'all';

async function getInv() {
  inv = await getInventoryById();
}

function getItemList() {
  const sendClasses = getValue('sendClasses');
  return arrayfromList(sendClasses) || arrayfromList(defaults.sendClasses);
}

const selectType = [
  [(selectId) => selectId === -1, () => true],
  [(selectId) => selectId === -2, (_selectId, [, itm]) => itm.type === 12],
  [(selectId) => selectId === -3, (_selectId, [, itm]) => itm.guild_tag >= 0],
  [(selectId) => selectId === -99, (_selectId, [, itm]) => itm?.craft === 'Perfect'],
  [() => true, (selectId, [, itm]) => selectId === itm.item_id],
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
  items.map(getItemObj)
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
  dispatch('select', id);
  doType(id);
}

function doPerf() {
  dispatch('perf');
  doType('-99');
}

const isInSt = ([, obj]) => obj.is_in_st;
const itemStyle = ([, obj]) => `div[id$="-highlight-${
  obj.inv_id}"]:not([class$="-create-selected"]) {
  background-color: rgba(255, 0, 0, 0.3);
}`;
const styleSheet = () => createStyle(entries(inv.items).filter(isInSt).map(itemStyle).join('\n'));

function highlightSts(node) {
  if (!inv.items.fshHasST) return;
  insertElement(node, styleSheet());
}
</script>

{#await getInv() then}
  <div>
    Select:
    <LinkButton on:click={() => doSelect('-1')}>All Items</LinkButton>
    <LinkButton on:click={() => doSelect('-2')}>All Resources</LinkButton>
    {#if wantsTagged}
      <LinkButton on:click={() => doSelect('-3')}>Guild Tagged</LinkButton>
    {/if}
    {#each getItemList() as [name, id]}
      <LinkButton on:click={() => doSelect(id)}>{name}</LinkButton>
    {/each}
    How many:<input bind:value={howMany} class="custominput" type="text">
  </div>
  <div use:highlightSts>
    <SelectInST bind:inSt on:toggle/>
  </div>
  <div>
    <LinkButton --button-color="blue" on:click={doPerf}>Perfect</LinkButton>
  </div>
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
