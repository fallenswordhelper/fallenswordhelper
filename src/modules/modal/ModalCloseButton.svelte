<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');
</script>

<button class="modal-close" on:click={ close } type="button">×</button>

<style>
  /* need specificity */
  .modal-close {
    background: transparent;
    border: none;
    color: #666666;
    cursor: pointer;
    font-family: inherit;
    font-size: 24px;
    font-weight: bold;
    line-height: 1;
    opacity: 0.8;
    padding: 0;
    position: absolute;
    right: 0.3em;
    text-decoration: none;
    top: -1px;
    transition: opacity 200ms;
  }
  .modal-close:hover {
    opacity: 1;
  }
</style>
