<script>
  import LinkButton from './LinkButton.svelte';
</script>
<span>[<LinkButton on:click><slot></slot></LinkButton>]</span>

<style>
  span {
    font-size: var(--button-size, 12px);
  }
</style>
