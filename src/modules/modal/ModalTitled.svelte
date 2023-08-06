<script>
  import { onMount } from 'svelte';
  import draggable from '../common/draggable';
  import Modal from './Modal.svelte';
  import ModalCloseButton from './ModalCloseButton.svelte';

  export let visible = true;

  let modal;
  let header;

  onMount(() => {
    draggable(header, modal);
  });
</script>

<Modal { visible } on:close bind:modal>
  <div class="modal-title" bind:this={ header }>
    <slot name="title" />
    <ModalCloseButton on:close />
  </div>
  <div class="modal-content">
    <slot />
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
    height: 20px;
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
