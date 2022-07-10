<script>
  import { createEventDispatcher } from 'svelte';
  import Modal from './Modal.svelte';

  export let msg = 'Are you sure?';
  export let visible = true;

  const dispatch = createEventDispatcher();

  function close() {
    visible = false;
    dispatch('no');
  }

  function sayYes() {
    visible = false;
    dispatch('yes');
  }
</script>

<Modal { visible } on:close={close}>
  <div>{msg}</div>
  <div>
    <button class="ui-button ui-corner-all ui-widget" on:click={sayYes} type="button">Yes</button>
    <button class="ui-button ui-corner-all ui-widget" on:click={close} type="button">No</button>
  </div>
</Modal>

<style>
  div:first-child {
    padding: 1em;
  }

  div:nth-child(2) {
    padding-bottom: 0.5em;
    text-align: center;
  }
</style>