<script>
  import LinkButton from './LinkButton.svelte';
  import arrayfromList from './arrayfromList';
  import { createEventDispatcher } from 'svelte';
  import defaults from '../support/dataObj.json';
  import getValue from '../system/getValue';

  export let wantsTagged = 0;
  const dispatch = createEventDispatcher();
  export let howMany = 'all';

  function getItemList() {
    const sendClasses = getValue('sendClasses');
    return arrayfromList(sendClasses) || arrayfromList(defaults.sendClasses);
  }

  function doSelect(id) {
    dispatch('select', id);
  }
</script>

<div>
  Select:
  <LinkButton on:click={() => doSelect('-1')}>All Items</LinkButton>
  <LinkButton on:click={() => doSelect('-2')}>All Resources</LinkButton>
  {#if wantsTagged}
    <LinkButton on:click={() => doSelect('-3')}>Guild Tagged</LinkButton>
  {/if}
  {#each getItemList() as [name, id]}
    <LinkButton on:click={() => doSelect(id)}>{name}</LinkButton>
  {/each}
  How many:<input bind:value={howMany} class="custominput" type="text">
</div>

<style>
  div {
    --button-color: black;
    --button-margin: auto 3px;
  }
  input {
    width: 32px;
  }
</style>
