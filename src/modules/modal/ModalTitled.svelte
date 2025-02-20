<script>
  import { onMount } from 'svelte';
  import draggable from '../common/draggable';
  import Modal from './Modal.svelte';
  import ModalCloseButton from './ModalCloseButton.svelte';

  let { children, close, title, visible = true } = $props();

  let modal = $state();
  let header = $state();

  onMount(() => {
    draggable(header, modal);
  });
</script>

<Modal bind:modal {close} {visible}>
  <div class="modal-title" bind:this={header}>
    {@render title?.()}
    <ModalCloseButton {close} />
  </div>
  <div class="modal-content">
    {@render children?.()}
  </div>
</Modal>

<style>
  .modal-title {
    background-color: #fec84a;
    background-image: linear-gradient(#fedd8f, #fec94d);
    border-color: #494437;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    color: #494437;
    cursor: move;
    font-weight: bold;
    min-height: 20px;
    padding-left: 8px;
    padding-top: 4px;
    position: relative;
  }
  .modal-content {
    margin-top: 0.3em;
    max-height: calc(100vh - 6.3em);
    overflow: auto;
    scrollbar-gutter: stable;
  }
</style>
