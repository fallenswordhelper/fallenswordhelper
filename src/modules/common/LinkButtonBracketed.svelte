<script>
  import LinkButton from './LinkButton.svelte';
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<span>[<LinkButton on:click>{@render children?.()}</LinkButton>]</span>

<style>
  span {
    font-size: var(--button-size, 12px);
  }
</style>
