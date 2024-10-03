<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import { fshBuffLog } from '../../support/constants';
  import { get, set } from '../../system/idb';

  export let visible = true;
  let records = [];

  function close() {
    sendEvent('Buff Log', 'close');
    visible = false;
  }

  async function init() {
    const txt = (await get(fshBuffLog)) ?? '';
    records = txt.split('<br>').map((log) => [log.slice(0, 19), log.slice(20)]);
  }

  function clearStorage() {
    set(fshBuffLog, '');
    sendEvent('Buff Log', 'clear storage');
    records = [];
  }
</script>

<ModalTitled {visible} on:close={close}>
  <svelte:fragment slot="title">Buff Log</svelte:fragment>
  <div class="top">
    <button on:click={clearStorage} type="button">Clear</button>
  </div>
  <div class="textContainer">
    {#await init() then}
      {#each records as [timestamp, txt]}
        <br />
        {timestamp}
        {#if txt.startsWith('<')}
          <span class="fshRed">
            {txt.slice(21, -7)}
          </span>
        {:else}
          {txt}
        {/if}
      {/each}
    {/await}
  </div>
</ModalTitled>

<style>
  div {
    width: 620px;
  }
  .top {
    text-align: center;
  }
  .textContainer {
    padding-left: 4px;
  }
</style>
