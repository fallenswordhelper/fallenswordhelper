<script>
  import sendEvent from '../../analytics/sendEvent';
  import quickExtract from '../../chrome/pageSwitcher/loader/quickExtract';
  import LinkBtnBracketed from '../../common/LinkBtnBracketed.svelte';
  import Count from './Count.svelte';

  const { dispatchDelete, dispatchDelType, dispatchQuickDel } = $props();

  let quickDelete = $state();
  let rollup = $state();

  let quickDelHidden = true;
  let countHidden = true;
  let deleteHidden = true;

  function enableQuickDel() {
    if (quickDelHidden) {
      quickDelHidden = false;
      sendEvent('components', 'enableQuickDel');
      quickDelete = true;
      dispatchQuickDel();
    }
  }

  function countComponents() {
    if (countHidden) {
      countHidden = false;
      sendEvent('components', 'countComponents');
      rollup = true;
    }
  }

  function insertQuickExtract() {
    sendEvent('components', 'insertQuickExtract');
    quickExtract();
  }

  function deleteAllVisible() {
    if (deleteHidden) {
      deleteHidden = false;
      sendEvent('components', 'deleteAllVisible');
      dispatchDelete();
    }
  }
</script>

<div class="fshCenter">
  {#if !quickDelete}
    <div>
      <LinkBtnBracketed onclick={enableQuickDel}>
        Enable Quick Del
      </LinkBtnBracketed>
    </div>
  {/if}
  {#if !rollup}
    <div>
      <LinkBtnBracketed onclick={countComponents}>
        Count Components
      </LinkBtnBracketed>
    </div>
  {:else}
    <Count {dispatchDelType} />
  {/if}
  <div>
    <LinkBtnBracketed onclick={insertQuickExtract}>
      Quick Extract
    </LinkBtnBracketed>
  </div>
  {#if quickDelete}
    <div>
      <LinkBtnBracketed --button-color="red" onclick={deleteAllVisible}>
        Delete All Visible
      </LinkBtnBracketed>
    </div>
  {/if}
</div>
