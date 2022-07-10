<script>
  import { onMount } from 'svelte';
  import draggable from '../common/draggable';
  import Modal from './Modal.svelte';
  import ModalCloseButton from './ModalCloseButton.svelte';

  export let title = '';
  export let visible = true;

  let modal;
  let header;

  onMount(() => {
    draggable(header, modal);
  });
</script>

<Modal { visible } on:close bind:modal>
  <div class="modal-title ui-widget-header ui-helper-reset ui-helper-clearfix" bind:this={header}>
    {title}
    <ModalCloseButton on:close></ModalCloseButton>
  </div>
  <div class="modal-content">
    <slot></slot>
  </div>
</Modal>

<style>
  .modal-title {
    border-radius: 4px;
    cursor: move;
    height: 20px;
    padding-left: 8px;
    padding-top: 4px;
    position: relative;
  }

  .modal-content {
    margin-top: 0.3em;
    max-height: calc(100vh - 6.3em);
    overflow: auto;
  }
</style>
