<script>
  import daGsTake from '../../../_dataAccess/daGsTake';
  import arrayFrom from '../../../common/arrayFrom';

  let { fshInv = 0 } = $props();
  let disabled = $state(1);
  let recalling = $state(0);

  const repairable = (
    _idx,
    { durability, max_durability: maxDur, player_id: pid, rarity, type },
  ) => durability < maxDur && pid === -1 && rarity !== 5 && type < 9;

  // svelte-ignore state_referenced_locally
    const api = new DataTable(fshInv);
  const rows = api.rows(repairable);
  const data = arrayFrom(rows.data());
  if (data.length) disabled = 0;

  function doRecall() {
    return daGsTake(data.map(({ inv_id: id }) => id));
  }

  function toBp() {
    if (!recalling) {
      recalling = 1;
    }
  }
</script>

<div class="main">
  <div class="head">Recall repairable to</div>
  <div class="btnbox">
    {#if recalling}
      {#await doRecall()}
        <span class="fshSpinner"></span>
      {:then}
        <span class="fshGreen">Recalled</span>
      {/await}
    {:else}
      <button
        class="custombutton"
        {disabled}
        onclick={toBp}
        type="button"
      >
        BP
      </button>
    {/if}
  </div>
  <div class="btnbox">
    {data.length} items to repair
  </div>
</div>

<style>
  .main {
    border-color: #333;
    border-radius: 12px;
    border-style: solid;
    border-width: 4px;
    padding: 8px;
    text-align: center;
  }
  .head {
    font-weight: bold;
    padding: 4px;
  }
  .btnbox {
    height: 20px;
    padding: 4px;
    position: relative;
  }
  button {
    font-family: inherit;
    font-size: inherit;
  }
</style>
