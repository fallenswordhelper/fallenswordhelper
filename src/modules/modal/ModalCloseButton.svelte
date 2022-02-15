<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');
</script>

<button class="modal-close ui-dialog-titlebar-close" on:click={close} type="button">×</button>

<style>
  /* need specificity */
  .modal-close {
    background: transparent;
    border: none;
    color: #666666;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    opacity: 0.8;
    padding: 0;
    text-decoration: none;
    top: 8px;
    transition: opacity 200ms;
  }
</style>
