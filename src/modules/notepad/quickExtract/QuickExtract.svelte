<script>
  import daUseItem from '../../_dataAccess/daUseItem';
  import sendEvent from '../../analytics/sendEvent';
  import all from '../../common/all';
  import alpha from '../../common/alpha';
  import invWithSt from '../../common/invWithSt';
  import isArray from '../../common/isArray';
  import SelectInST from '../../common/SelectInST.svelte';
  import confirm from '../../modal/confirm.svelte';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import getValue from '../../system/getValue';
  import setValue from '../../system/setValue';
  import processResult from './processResult';
  import rollupExtractable from './rollupExtractable';
  import LinkBtn from '../../common/LinkBtn.svelte';
  import LinkBtnBracketed from '../../common/LinkBtnBracketed.svelte';

  let { visible = $bindable(true) } = $props();

  const prompt = 'Are you sure you want to extract all similar items?';
  const prefSelectMain = 'selectMain';
  const prefDisablePrompts = 'disableQuickExtractPrompts';

  let prm = $state(null);
  let playerId = null;
  let selectST = $state(null);
  let selectMain = $state(getValue(prefSelectMain));
  let disablePrompts = $state(getValue(prefDisablePrompts));
  let extractable = null;
  let toExtract = $state(null);
  let results = $state([]);

  const isExtractable = (item) =>
    item.item_name === 'Zombie Coffin' || item.type === 12 || item.type === 16;
  const byName = (a, b) => alpha(a.item_name, b.item_name);
  const inST = (i) => selectST || !i.is_in_st;
  const inMain = (i) => !selectMain || i.folder_id === -1;

  function close() {
    sendEvent('quickExtract', 'close');
    visible = false;
  }

  function updateExtract() {
    toExtract =
      isArray(extractable) &&
      rollupExtractable(playerId, extractable.filter(inST).filter(inMain));
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
    const inv = await invWithSt();
    playerId = inv?.player_id;
    extractable = inv?.items?.filter(isExtractable).sort(byName);
    updateExtract();
  }

  function refresh() {
    sendEvent('quickExtract', 'refresh');
    results = [];
    prm = getInv();
  }

  $effect(() => {
    if (visible) {
      results = [];
      prm = getInv();
    }
  });

  let lastMsg;

  function success(json) {
    if (!json?.s && lastMsg !== json?.e?.message) {
      lastMsg = json?.e?.message;
      results = [...results, json?.e?.message];
    }
    return json?.s;
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
      if (toExtract[index]?.count) toExtract[index].count = 0;
    }
  }
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Quick Extract
  {/snippet}
  <div>
    Select which type of plants you wish to extract all of. Only select
    extractable resources.
    <br />
    <SelectInST bind:inSt={selectST} dispatchToggle={toggleSelectST} />&nbsp;
    <label>
      <input
        bind:checked={selectMain}
        onchange={toggleSelectMain}
        type="checkbox"
      />
      Main Folder Only
    </label>&nbsp;
    <label>
      <input
        bind:checked={disablePrompts}
        onchange={togglePrompts}
        type="checkbox"
      />
      Disable Prompts
    </label>&nbsp;
    <LinkBtnBracketed onclick={refresh}>Refresh</LinkBtnBracketed>
    <br />
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
                <li>
                  {#if result.startsWith('<')}
                    <span class="fshRed">
                      {result.slice(1)}
                    </span>
                  {:else}
                    {result}
                  {/if}
                </li>
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
                    <LinkBtn onclick={() => extractEvt(index)}>
                      Extract {count}
                    </LinkBtn>
                  {/if}
                {:else}
                  Done
                {/if}
              </td>
              <td class="imgCol">
                <span class="imgSpan tip-dynamic" data-tipped={tip} {style}
                ></span>
              </td>
              <td>{name}</td>
            </tr>
          {/each}
        {:catch error}
          <tr>
            <td colspan="3">
              <p style="color: red">{error.message}</p>
            </td>
          </tr>
        {/await}
      </tbody>
    </table>
  </div>
</ModalTitled>

<style>
  div {
    color-scheme: light;
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
