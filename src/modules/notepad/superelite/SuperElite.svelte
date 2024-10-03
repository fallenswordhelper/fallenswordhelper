<script>
  import EachRow from './EachRow.svelte';
  import TrackerPref from './TrackerPref.svelte';
  import trackerTableStore from './trackerTableStore';
</script>

<div class="container">
  <div class="top">
    <TrackerPref />
  </div>
  <div class="tracker-table">
    {#if $trackerTableStore}
      <div><div class="innerColumnHeader">&nbsp;</div></div>
      <div><div class="innerColumnHeader">Creature</div></div>
      <div><div class="innerColumnHeader">Last Kill</div></div>
      <div><div class="innerColumnHeader">Location</div></div>
      {#each $trackerTableStore as entry (entry[0])}
        <EachRow {entry} />
      {/each}
    {/if}
  </div>
</div>

<style>
  .container {
    min-height: 140px;
    overflow-x: hidden;
    padding-left: 8px;
  }
  .top {
    padding-bottom: 8px;
    padding-top: 4px;
    text-align: center;
    width: 614px;
  }
  .tracker-table {
    column-gap: 2px;
    display: grid;
    grid-template-columns: 20px 200px 128px 260px;
    row-gap: 2px;
  }
  .innerColumnHeader {
    width: 100%;
  }
</style>
