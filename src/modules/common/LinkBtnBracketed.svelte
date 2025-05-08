<script>
  import LinkBtn from "./LinkBtn.svelte";

  let { children, onclick } = $props();
</script>

<span>[<LinkBtn {onclick}>{@render children?.()}</LinkBtn>]</span>

<style>
  span {
    font-size: var(--button-size, 12px);
  }
</style>
