<script>
  export let disabled = 0;
</script>

<button {disabled} on:click type="button">
  <slot></slot>
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
    padding: 0;
    text-decoration: underline;
    user-select: text;
    width: var(--button-width, auto);
  }
  button:disabled {
    color: grey;
  }
</style>
