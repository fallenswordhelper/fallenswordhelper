<script>
  import sendEvent from '../../../analytics/sendEvent';
  import LinkButtonBracketed from '../../../common/LinkButtonBracketed.svelte';
  import calf from '../../../support/calf';
  import setValue from '../../../system/setValue';

  const label = (pref) => (pref ? 'Hide' : 'Show');

  let {
    doDropLinks,
    doExtraLinks,
    doSelectLocked,
    showExtraLinks = $bindable(false),
    showQuickDropLinks = $bindable(false),
  } = $props();

  function toggleShowExtraLinks() {
    sendEvent('storeitems', 'toggleShowExtraLinks');
    showExtraLinks = !showExtraLinks;
    setValue('showExtraLinks', showExtraLinks);
    doExtraLinks(showExtraLinks);
  }

  function toggleShowQuickDropLinks() {
    sendEvent('storeitems', 'toggleShowQuickDropLinks');
    showQuickDropLinks = !showQuickDropLinks;
    setValue('showQuickDropLinks', showQuickDropLinks);
    doDropLinks(showQuickDropLinks);
  }

  function selectLocked() {
    sendEvent('storeitems', 'selectLocked');
    doSelectLocked();
  }
</script>

<LinkButtonBracketed --button-width="11.8em" on:click={toggleShowExtraLinks}>
  {label(showExtraLinks)} AH and UFSG Links
</LinkButtonBracketed>&nbsp;
<LinkButtonBracketed
  --button-width="10.6em"
  on:click={toggleShowQuickDropLinks}
>
  {label(showQuickDropLinks)} Quick Drop links
</LinkButtonBracketed>&nbsp;
{#if calf.subcmd2 === 'storeitems'}
  <LinkButtonBracketed --button-width="10.8em" on:click={selectLocked}>
    Select All Guild Locked
  </LinkButtonBracketed>
{/if}
