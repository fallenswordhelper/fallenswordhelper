<script>
  let { children, disabled = 0, onclick } = $props();
</script>

<button {disabled} {onclick} type="button">
  {@render children?.()}
</button>

<style>
  button {
    background: transparent;
    border: none;
    color: var(--button-color, blue);
    cursor: pointer;
    font-size: var(--button-size, 12px);
    font-family: Helvetica, Arial, sans-serif;
    margin: var(--button-margin, 0);
    opacity: 1;
    padding: 0;
    text-decoration: var(--button-deco, underline);
    transition: opacity 200ms;
    user-select: none;
    width: var(--button-width, auto);
  }
  button:disabled {
    color: grey;
    cursor: default;
  }
  button:hover {
    opacity: 0.8;
  }
</style>
