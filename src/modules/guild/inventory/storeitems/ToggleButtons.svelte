<script>
  import { createEventDispatcher } from 'svelte';
  import sendEvent from '../../../analytics/sendEvent';
  import LinkButtonBracketed from '../../../common/LinkButtonBracketed.svelte';
  import calf from '../../../support/calf';
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

<LinkButtonBracketed --button-width="11.8em" on:click={toggleShowExtraLinks}>{label(showExtraLinks)} AH and UFSG Links</LinkButtonBracketed>&nbsp;
<LinkButtonBracketed --button-width="10.6em" on:click={toggleShowQuickDropLinks}>{label(showQuickDropLinks)} Quick Drop links</LinkButtonBracketed>&nbsp;
{#if calf.subcmd2 === 'storeitems'}
  <LinkButtonBracketed --button-width="10.8em" on:click={selectLocked}>Select All Guild Locked</LinkButtonBracketed>
{/if}
