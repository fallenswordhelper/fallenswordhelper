<script>
  import daGsTake from '../../../_dataAccess/daGsTake';
  import arrayFrom from '../../../common/arrayFrom';

  export let fshInv = 0;
  let disabled = 1;

  const repairable = (_idx, {
    durability,
    max_durability: maxDur,
    player_id: pid,
    rarity,
    type,
  }) => durability < maxDur && pid === -1 && rarity !== 5 && type < 9;

  const api = new DataTable(fshInv);
  const rows = api.rows(repairable);
  const data = arrayFrom(rows.data());
  if (data.length) disabled = 0;

  function toBp() {
    daGsTake(data.map(({ inv_id: id }) => id));
  }

</script>

<div class="main">
  <div class="head">Recall repairable to</div>
  <div class="btnbox">
    <button class="custombutton" { disabled } on:click={ toBp } type="button">BP</button>
  </div>
  <div class="btnbox">
    { data.length } items to repair
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
    padding: 4px;
  }
  button {
    font-family: inherit;
    font-size: inherit;
  }
</style>
