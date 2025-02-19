<script>
  import entries from './entries';
  import LinkButton from './LinkButton.svelte';

  let { doFilter, folders = {}, needsWorn = 0 } = $props();
</script>

<LinkButton on:click={() => doFilter('-2')}>All</LinkButton>{#if needsWorn}
  <LinkButton on:click={() => doFilter('-3')}>Worn</LinkButton>
{/if}<LinkButton on:click={() => doFilter('-1')}
  >Main
</LinkButton>{#each entries(folders) as [id, name]}
  <LinkButton on:click={() => doFilter(id)}>{name}</LinkButton>
{/each}
