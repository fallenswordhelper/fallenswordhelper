<script>
  import { createEventDispatcher } from 'svelte';
  import entries from './entries';
  import LinkButton from './LinkButton.svelte';

  const dispatch = createEventDispatcher();
  export let folders = {};
  export let needsWorn = 0;

  function doFilter(id) {
    dispatch('filter', id);
  }
</script>

<LinkButton on:click={() => doFilter('-2')}>All
</LinkButton>{#if needsWorn}
  <LinkButton on:click={() => doFilter('-3')}>Worn
</LinkButton>{/if}<LinkButton on:click={() => doFilter('-1')}>Main
</LinkButton>{#each entries(folders) as [id, name]}
  <LinkButton on:click={() => doFilter(id)}>{name}</LinkButton>
{/each}
