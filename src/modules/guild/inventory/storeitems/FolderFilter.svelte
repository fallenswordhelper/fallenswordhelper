<script>
  import LinkButton from '../../../common/LinkButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import entries from '../../../common/entries';
  import sendEvent from '../../../analytics/sendEvent';

  const dispatch = createEventDispatcher();
  export let inv = { folders: {} };

  function doFilter(id) {
    sendEvent('storeitems', 'Filter Folder');
    dispatch('filter', id);
  }
</script>

<style>
  td {
    --button-color: black;
    --button-margin: auto 3px;
    padding: 2px 0;
  }
</style>

<tr class="fshCenter">
  <td colspan="3">
    <LinkButton on:click={() => doFilter('-2')}>All</LinkButton>
    <LinkButton on:click={() => doFilter('-1')}>Main</LinkButton>
    {#each entries(inv.folders) as [id, name]}
      <LinkButton on:click={() => doFilter(id)}>{name}</LinkButton>
    {/each}
  </td>
</tr>
