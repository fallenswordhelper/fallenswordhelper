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

<Modal { visible } on:close={ close }>
  <div>{ msg }</div>
  <div>
    <button on:click={ sayYes } type="button">Yes</button>
    <button on:click={ close } type="button">No</button>
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

  button {
    background-color: #fece2f;
    background-image: linear-gradient(#fedd6d, #fed449);
    border-color: #d19405;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    color: #4c3000;
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
    line-height: 1;
    margin-right: 0.1em;
    padding: 0.4em 1em;
  }

  button:hover {
    background-color: #f0be00;
    background-image: linear-gradient(#f5d559, #f2c725);
    border-color: #a45b13;
    color: #381f00;
  }
</style>
