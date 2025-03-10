<script>
  import entries from './entries';
  import LinkBtn from './LinkBtn.svelte';

  let { doFilter, folders = {}, needsWorn = 0 } = $props();
</script>

<LinkBtn onclick={() => doFilter('-2')}>All</LinkBtn>{#if needsWorn}
  <LinkBtn onclick={() => doFilter('-3')}>Worn</LinkBtn>
{/if}<LinkBtn onclick={() => doFilter('-1')}
  >Main
</LinkBtn>{#each entries(folders) as [id, name]}
  <LinkBtn onclick={() => doFilter(id)}>{name}</LinkBtn>
{/each}
