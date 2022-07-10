<script>
  import daUseItem from '../../_dataAccess/daUseItem';
  import inventory from '../../_dataAccess/export/inventory';
  import sendEvent from '../../analytics/sendEvent';
  import all from '../../common/all';
  import alpha from '../../common/alpha';
  import LinkButton from '../../common/LinkButton.svelte';
  import LinkButtonBracketed from '../../common/LinkButtonBracketed.svelte';
  import SelectInST from '../../common/SelectInST.svelte';
  import confirm from '../../modal/confirm';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import getValue from '../../system/getValue';
  import setValue from '../../system/setValue';
  import processResult from './processResult';
  import rollupExtractable from './rollupExtractable';

  const prompt = 'Are you sure you want to extract all similar items?';
  const prefSelectST = 'selectST';
  const prefSelectMain = 'selectMain';
  const prefDisablePrompts = 'disableQuickExtractPrompts';

  export let visible = true;
  let prm;
  let playerId;
  let selectST = getValue(prefSelectST);
  let selectMain = getValue(prefSelectMain);
  let disablePrompts = getValue(prefDisablePrompts);
  let extractable;
  let toExtract;
  let results = [];

  const isExtractable = (item) => item.item_name === 'Zombie Coffin'
    || item.type === 12 || item.type === 16;
  const byName = (a, b) => alpha(a.item_name, b.item_name);
  const inST = (i) => selectST || !i.is_in_st;
  const inMain = (i) => !selectMain || i.folder_id === -1;

  function close() {
    sendEvent('quickExtract', 'close');
    visible = false;
  }

  function updateExtract() {
    toExtract = rollupExtractable(playerId, extractable.filter(inST).filter(inMain));
  }

  function toggleSelectST() {
    sendEvent('quickExtract', 'toggleSelectST');
    updateExtract();
  }

  function toggleSelectMain() {
    sendEvent('quickExtract', 'toggleSelectMain');
    setValue(prefSelectMain, selectMain);
    updateExtract();
  }

  function togglePrompts() {
    sendEvent('quickExtract', 'togglePrompts');
    setValue(prefDisablePrompts, disablePrompts);
  }

  async function getInv() {
    const inv = await inventory();
    playerId = inv.player_id;
    extractable = inv.items.filter(isExtractable).sort(byName);
    updateExtract();
  }

  function refresh() {
    sendEvent('quickExtract', 'refresh');
    results = [];
    prm = getInv();
  }

  $: if (visible) {
    results = [];
    prm = getInv();
  }

  let lastMsg;

  function success(json) {
    if (!json.s && lastMsg !== json.e.message) {
      lastMsg = json.e.message;
      results = [...results, json.e.message];
    }
    return json.s;
  }

  async function ajaxExtract(invId) {
    const json = await daUseItem(invId);
    if (success(json)) {
      results = [...results, processResult(json.r)];
      extractable = extractable.filter((i) => i.inv_id !== invId);
    }
  }

  async function extractEvt(index) {
    sendEvent('quickExtract', 'extract', disablePrompts);
    const canProceed = disablePrompts ? true : await confirm(prompt);
    if (canProceed) {
      toExtract[index].delPending = true;
      await all(toExtract[index].extractIds.map(ajaxExtract));
      toExtract[index].count = 0;
    }
  }
</script>

<ModalTitled { visible } on:close={close} title="Quick Extract">
  <div>
    Select which type of plants you wish to extract all of. Only select extractable resources.
    <br>
    <SelectInST bind:inSt={selectST} on:toggle={toggleSelectST} />&nbsp;
    <label>
      <input bind:checked={selectMain} on:change={toggleSelectMain} type="checkbox">
      Main Folder Only
    </label>&nbsp;
    <label>
      <input bind:checked={disablePrompts} on:change={togglePrompts} type="checkbox">
      Disable Prompts
    </label>&nbsp;
    <LinkButtonBracketed on:click={refresh}>Refresh</LinkButtonBracketed>
    <br>
    <table>
      <thead>
        <tr>
          <th class="actionCol">Actions</th>
          <th colspan="2">Items</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="3">
            <ol>
              {#each results as result}
                <li>{@html result}</li>
              {/each}
            </ol>
          </td>
        </tr>
        {#await prm then}
          {#each toExtract as { count, delPending, item_name: name, style, tip }, index}
            <tr>
              <td class:delPending>
                {#if count}
                  {#if delPending}
                    <span class="fshSpinner fshSpinner12"></span>
                  {:else}
                    <LinkButton on:click={() => extractEvt(index)}>Extract {count}</LinkButton>
                  {/if}
                {:else}
                  Done
                {/if}
              </td>
              <td class="imgCol">
                <span class="imgSpan tip-dynamic" data-tipped={tip} style={style}></span>
              </td>
              <td>{name}</td>
            </tr>
          {/each}
        {/await}
      </tbody>
    </table>
  </div>
</ModalTitled>

<style>
  div {
    padding: 2px;
    width: 640px;
  }

  input {
    vertical-align: text-top;
  }

  table {
    width: 100%;
  }

  .actionCol {
    width: 12%;
  }

  li {
    list-style: decimal inside;
  }

  .delPending {
    position: relative;
  }

  .imgCol {
    width: 8%;
  }

  .imgSpan {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 30px;
    width: 30px;
  }
</style>
