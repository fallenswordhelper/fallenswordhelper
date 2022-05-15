<script>
  import FolderButtons from '../../common/FolderButtons.svelte';
  import ItemImg from '../../common/ItemImg.svelte';
  import LinkButton from '../../common/LinkButton.svelte';
  import alpha from '../../common/alpha';
  import calf from '../../support/calf';
  import confirm from '../../modal/confirm';
  import daEquipItem from '../../_dataAccess/daEquipItem';
  import daUseItem from '../../_dataAccess/daUseItem';
  import fromEntries from '../../common/fromEntries';
  import sendEvent from '../../analytics/sendEvent';

  const prompt = 'Are you sure you want to use/extract the item?';
  export let appInv = 0;
  let selectedFolder = -2;

  const main = ({ a }) => a !== -1;
  const names = ({ a, n }) => [a, n];
  const byName = (a, b) => alpha(a.n, b.n);

  const folders = fromEntries(appInv.folders.filter(main).map(names));
  const myItems = appInv.items.sort(byName);

  function doFilter(e) {
    selectedFolder = Number(e.detail);
  }

  async function doAction(i, prop, fn, verb) {
    sendEvent('QuickWear', `doAction - ${verb}`);
    myItems[i][prop] = 1;
    const json = await fn(myItems[i].a);
    if (json.s) myItems[i].used = verb;
  }

  function doWear(i) {
    doAction(i, 'equip', daEquipItem, 'Worn');
  }

  async function doUse(i) {
    const canProceed = calf.disableQuickWearPrompts || await confirm(prompt);
    if (canProceed) {
      doAction(i, 'use', daUseItem, 'Used');
    }
  }
</script>

<table>
  <caption>
    <FolderButtons {folders} on:filter={doFilter}/>
  </caption>
  <thead>
    <tr>
      <th>Actions</th>
      <th colspan="2">Items</th>
    </tr>
  </thead>
  <tbody>
    {#each myItems as item, index}
      <tr class:hideRow={selectedFolder !== -2 && item.f !== selectedFolder}>
        <td>
          {#if item.used}
            <span class="itemUsed">{item.used}</span>
          {:else}
            <span class="equippable">
              {#if item.equip}
                <span class="fshSpinner fshSpin12"></span>
              {:else}
                <LinkButton disabled={!item.eq} on:click={() => doWear(index)}>Wear</LinkButton>
              {/if}
            </span>
            |
            <span class="usable">
              {#if item.use}
                <span class="fshSpinner fshSpin12"></span>
              {:else}
                <LinkButton disabled={item.eq || !(item.u && !item.c)} on:click={() => doUse(index)}>Use/Ext</LinkButton>
              {/if}
            </span>
          {/if}
        </td>
        <td>
          <ItemImg {item} small=1 t=0/>
        </td>
        <td>{item.n}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
  }
  caption {
    --button-color: #383838;
    --button-margin: auto 3px;
    --button-size: 1em;
    padding-bottom: 0.5em;
    text-align: center;
  }
  thead tr {
    background-color: #CD9E4B;
  }
  th:first-of-type {
    text-align: center;
    width: 20%;
  }
  td:first-of-type {
    --button-size: x-small;
    text-align: center;
    width: 20%;
  }
  .hideRow {
    display: none;
  }
  .itemUsed {
    color: green;
    font-weight: bold;
  }
  .equippable, .usable {
    display: inline-block;
    position: relative;
  }
  .equippable {
    width: 25px;
  }
  .usable {
    width: 36px;
  }
</style>
