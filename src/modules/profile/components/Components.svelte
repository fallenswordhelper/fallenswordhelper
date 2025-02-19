<script>
  import sendEvent from '../../analytics/sendEvent';
  import quickExtract from '../../chrome/pageSwitcher/loader/quickExtract';
  import LinkButtonBracketed from '../../common/LinkButtonBracketed.svelte';
  import Count from './Count.svelte';

  const { dispatchDelete, dispatchDelType, dispatchQuickDel } = $props();

  let quickDelete = $state();
  let rollup = $state();

  function enableQuickDel() {
    sendEvent('components', 'enableQuickDel');
    quickDelete = true;
    dispatchQuickDel();
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
    dispatchDelete();
  }
</script>

<div class="fshCenter">
  {#if !quickDelete}
    <div>
      <LinkButtonBracketed on:click|once={enableQuickDel}>
        Enable Quick Del
      </LinkButtonBracketed>
    </div>
  {/if}
  {#if !rollup}
    <div>
      <LinkButtonBracketed on:click|once={countComponents}>
        Count Components
      </LinkButtonBracketed>
    </div>
  {:else}
    <Count {dispatchDelType} />
  {/if}
  <div>
    <LinkButtonBracketed on:click={insertQuickExtract}>
      Quick Extract
    </LinkButtonBracketed>
  </div>
  {#if quickDelete}
    <div>
      <LinkButtonBracketed
        --button-color="red"
        on:click|once={deleteAllVisible}
      >
        Delete All Visible
      </LinkButtonBracketed>
    </div>
  {/if}
</div>
