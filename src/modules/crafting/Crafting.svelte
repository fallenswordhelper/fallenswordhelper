<script>
  import { createEventDispatcher } from 'svelte';
  import sendEvent from '../analytics/sendEvent';
  import FolderButtons from '../common/FolderButtons.svelte';

  let currentFolder = -2;
  const dispatch = createEventDispatcher();
  export let prm = 0;

  function doFilter(e) {
    sendEvent('crafting', 'doFilter');
    currentFolder = Number(e.detail);
    dispatch('doFilter', currentFolder);
  }
</script>

{#await prm then inv}
  <div class="buttonContainer">
    <FolderButtons folders={inv.folders} needsWorn=1 on:filter={doFilter}/>
  </div>
{/await}

<style>
  div {
    text-align: center;
  }
  .buttonContainer {
    --button-color: black;
    --button-margin: auto 3px;
    padding: 2px 0;
  }
</style>
