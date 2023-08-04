<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import { get, set } from '../../system/idb';

  export let visible = true;
  let txt = '';

  function close() {
    sendEvent('FS Box Log', 'close');
    visible = false;
  }

  async function init() {
    txt = await get('fsh_fsboxcontent');
  }

  function clearStorage() {
    set('fsh_fsboxcontent', '');
    sendEvent('FS Box Log', 'clear storage');
    txt = '';
  }
</script>

<ModalTitled { visible } on:close={close}>
  <svelte:fragment slot="title">FS Box Log</svelte:fragment>
  <div class="top">
    <button on:click={clearStorage} type="button">Clear</button>
  </div>
  <div class="textContainer">
    {#await init() then }
      { @html txt }
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
    font-size: 11px;
    padding-left: 4px;
  }
</style>
