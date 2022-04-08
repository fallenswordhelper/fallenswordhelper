<script>
  import LinkButton from '../common/LinkButton.svelte';
  import arrayfromList from '../common/arrayfromList';
  import { createEventDispatcher } from 'svelte';
  import defaults from '../support/dataObj.json';
  import getValue from '../system/getValue';

  const dispatch = createEventDispatcher();
  let howMany = 'all';

  function getItemList() {
    const sendClasses = getValue('sendClasses');
    return arrayfromList(sendClasses) || arrayfromList(defaults.sendClasses);
  }

  function doSelect(id) {
    dispatch('select', [id, howMany]);
  }

  function doPerf() {
    dispatch('perf', howMany);
  }
</script>

<div class="quickSelect">
  Select:
  <LinkButton on:click={() => doSelect('-1')}>All Items</LinkButton>
  <LinkButton on:click={() => doSelect('-2')}>All Resources</LinkButton>
  {#each getItemList() as [name, id]}
    <LinkButton on:click={() => doSelect(id)}>{name}</LinkButton>
  {/each}How many:<input bind:value={howMany} class="custominput" type="text">
</div>
<div>
  <LinkButton --button-color="blue" on:click={doPerf}>Perfect</LinkButton>
</div>

<style>
  div {
    margin: 10px auto 10px auto;
    text-align: center;
  }
  .quickSelect {
    --button-color: black;
    --button-margin: auto 3px;
  }
  input {
    width: 32px;
  }
</style>
