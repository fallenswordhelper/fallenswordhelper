<script>
  import calf from '../../../support/calf';
  import RecallAll from './RecallAll.svelte';
  import Repair from './Repair.svelte';
  import UpdateStats from './UpdateStats.svelte';

  export let fshInv = 0;
</script>

<div class="container">
  {#if calf.subcmd === 'guildinvmgr'}
    <RecallAll />
    <!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
    <!-- svelte-ignore missing-declaration -->
    {#if defineUserIsDev}
      <Repair {fshInv} />
    {/if}
  {:else}
    <div></div>
  {/if}
  <UpdateStats {fshInv} />
</div>

<style>
  .container {
    color: #333;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
</style>
