<script>
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
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-family : inherit;
    font-size: 12px;
    margin: auto 3px;
    padding: 0;
    text-decoration: underline;
    user-select: text;
  }
</style>

<tr class="fshCenter">
  <td colspan="3">
    <button on:click={() => doFilter('-2')} type="button">All</button>
    <button on:click={() => doFilter('-1')} type="button">Main</button>
    {#each entries(inv.folders) as [id, name]}
      <button on:click={() => doFilter(id)} type="button">{name}</button>
    {/each}
  </td>
</tr>
