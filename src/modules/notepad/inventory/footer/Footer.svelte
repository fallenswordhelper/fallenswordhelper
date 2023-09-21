<script>
  import calf from '../../../support/calf';
  import RecallAll from './RecallAll.svelte';
  import UpdateStats from './UpdateStats.svelte';

  export let fshInv = 0;

</script>
<div class="container">
  { #if calf.subcmd === 'guildinvmgr' }
    <RecallAll />
  { :else }
    <div></div>
  { /if }
  <UpdateStats { fshInv } />
</div>

<style>
  .container {
    color: #333;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
</style>
