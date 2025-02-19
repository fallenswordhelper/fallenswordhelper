<script>
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  /**
   * @typedef {Object} Props
   * @property {number} [disabled]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { disabled = 0, children } = $props();
</script>

<button {disabled} onclick={bubble('click')} type="button">
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
