<script>
  import sendEvent from '../../../analytics/sendEvent';
  import LinkBtnBracketed from '../../../common/LinkBtnBracketed.svelte';
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

<LinkBtnBracketed --button-width="11.8em" onclick={toggleShowExtraLinks}>
  {label(showExtraLinks)} AH and UFSG Links
</LinkBtnBracketed>&nbsp;
<LinkBtnBracketed --button-width="10.6em" onclick={toggleShowQuickDropLinks}>
  {label(showQuickDropLinks)} Quick Drop links
</LinkBtnBracketed>&nbsp;
{#if calf.subcmd2 === 'storeitems'}
  <LinkBtnBracketed --button-width="10.8em" onclick={selectLocked}>
    Select All Guild Locked
  </LinkBtnBracketed>
{/if}
