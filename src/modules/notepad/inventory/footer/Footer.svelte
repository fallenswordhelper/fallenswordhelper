<script>
  import calf from '../../../support/calf';
  import RecallAll from './RecallAll.svelte';
  import Repair from './Repair.svelte';
  import UpdateStats from './UpdateStats.svelte';

  /**
   * @typedef {Object} Props
   * @property {number} [fshInv]
   */

  /** @type {Props} */
  let { fshInv = 0 } = $props();
</script>

<div class="container">
  {#if calf.subcmd === 'guildinvmgr'}
    <RecallAll />
    <Repair {fshInv} />
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
