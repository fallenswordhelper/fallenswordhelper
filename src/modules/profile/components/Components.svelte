<script>
  import { createEventDispatcher } from 'svelte';
  import sendEvent from '../../analytics/sendEvent';
  import quickExtract from '../../chrome/pageSwitcher/loader/quickExtract';
  import LinkButtonBracketed from '../../common/LinkButtonBracketed.svelte';
  import Count from './Count.svelte';

  let quickDelete;
  let rollup;

  const dispatch = createEventDispatcher();

  function enableQuickDel() {
    sendEvent('components', 'enableQuickDel');
    quickDelete = true;
    dispatch('enableQuickDel');
  }

  function countComponents() {
    sendEvent('components', 'countComponents');
    rollup = true;
  }

  function insertQuickExtract() {
    sendEvent('components', 'insertQuickExtract');
    quickExtract();
  }

  function deleteAllVisible() {
    sendEvent('components', 'deleteAllVisible');
    dispatch('deleteAllVisible');
  }
</script>

<div class="fshCenter">
  {#if !quickDelete}
    <div><LinkButtonBracketed on:click|once={enableQuickDel}>Enable Quick Del</LinkButtonBracketed></div>
  {/if}
  {#if !rollup}
    <div><LinkButtonBracketed on:click|once={countComponents}>Count Components</LinkButtonBracketed></div>
  {:else}
    <Count on:delType/>
  {/if}
  <div><LinkButtonBracketed on:click={insertQuickExtract}>Quick Extract</LinkButtonBracketed></div>
  {#if quickDelete}
    <div><LinkButtonBracketed --button-color="red" on:click|once={deleteAllVisible}>Delete All Visible</LinkButtonBracketed></div>
  {/if}
</div>
