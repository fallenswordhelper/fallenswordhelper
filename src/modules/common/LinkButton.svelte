<style>
  button {
    background: transparent;
    border: none;
    color: var(--button-color, blue);
    cursor: pointer;
    font: 12px Helvetica, Arial, sans-serif;
    margin: var(--button-margin, 0);
    padding: 0;
    text-decoration: underline;
    user-select: text;
    width: var(--button-width, auto);
  }
</style>

<button on:click type="button">
  <slot></slot>
</button>
