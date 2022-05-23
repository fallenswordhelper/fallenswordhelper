<script>
  import LinkButton from '../common/LinkButton.svelte';
  import QuickSelectClasses from '../common/QuickSelectClasses.svelte';
  import SelectInST from '../common/SelectInST.svelte';
  import { createEventDispatcher } from 'svelte';
  import getValue from '../system/getValue';

  const dispatch = createEventDispatcher();
  let howMany = 'all';
  let inSt = getValue('selectST');

  function doSelect(e) {
    dispatch('select', [e.detail, howMany, inSt]);
  }

  function doPerf() {
    dispatch('perf', [howMany, inSt]);
  }
</script>

<div>
  <QuickSelectClasses bind:howMany on:select={doSelect}/>
</div>
<div>
  <SelectInST bind:inSt on:toggle/>
</div>
<div>
  <LinkButton --button-color="blue" on:click={doPerf}>Perfect</LinkButton>
</div>

<style>
  div {
    margin: 10px auto 10px auto;
    text-align: center;
  }
</style>
