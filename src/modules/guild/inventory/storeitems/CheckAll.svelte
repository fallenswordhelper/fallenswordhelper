<script>
  import { createEventDispatcher } from 'svelte';
  import sendEvent from '../../../analytics/sendEvent';

  const dispatch = createEventDispatcher();

  function doCheckAll() {
    sendEvent('storeitems', 'Check All');
    dispatch('checkall');
  }
</script>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
  }
</style>

<button class="custombutton" on:click={doCheckAll} type="button">Check All</button>&nbsp;
