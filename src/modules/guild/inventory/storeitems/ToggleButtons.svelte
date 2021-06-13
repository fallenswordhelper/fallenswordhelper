<script>
  import calf from '../../../support/calf';
  import { createEventDispatcher } from 'svelte';
  import sendEvent from '../../../analytics/sendEvent';
  import setValue from '../../../system/setValue';

  const dispatch = createEventDispatcher();
  const label = (pref) => (pref ? 'Hide' : 'Show');

  export let showExtraLinks = false;
  export let showQuickDropLinks = false;

  function toggleShowExtraLinks() {
    sendEvent('storeitems', 'toggleShowExtraLinks');
    showExtraLinks = !showExtraLinks;
    setValue('showExtraLinks', showExtraLinks);
    dispatch('showExtraLinks', showExtraLinks);
  }

  function toggleShowQuickDropLinks() {
    sendEvent('storeitems', 'toggleShowQuickDropLinks');
    showQuickDropLinks = !showQuickDropLinks;
    setValue('showQuickDropLinks', showQuickDropLinks);
    dispatch('showQuickDropLinks', showQuickDropLinks);
  }

  function selectLocked() {
    sendEvent('storeitems', 'selectLocked');
    dispatch('selectLocked');
  }
</script>

<style>
  button {
    background: transparent;
    border: none;
    color: blue;
    cursor: pointer;
    font-family : inherit;
    font-size: 12px;
    margin: 0;
    padding: 0;
    text-decoration: underline;
    user-select: text;
  }
  button:first-of-type {
    width: 11.8em;
  }
  button:nth-of-type(2) {
    width: 10.6em;
  }
  button:nth-of-type(3) {
    width: 10.8em;
  }
</style>

[<button on:click={toggleShowExtraLinks}>{label(showExtraLinks)} AH and UFSG Links</button>]&nbsp;
[<button on:click={toggleShowQuickDropLinks}>{label(showQuickDropLinks)} Quick Drop links</button>]&nbsp;
{#if calf.subcmd2 === 'storeitems'}
  [<button on:click={selectLocked}>Select All Guild Locked</button>]
{/if}
