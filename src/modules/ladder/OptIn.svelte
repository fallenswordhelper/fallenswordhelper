<script>
  import sendEvent from '../analytics/sendEvent';
  import isBoolean from '../common/isBoolean';

  export let isOnLadder;
  export let toggleLadder;

  let opt;

  async function init() {
    opt = await isOnLadder();
  }

  let togglePromise;

  function toggle() {
    opt = !opt;
    togglePromise = toggleLadder(opt);
    sendEvent('ladder', 'opt in/out');
  }
</script>

<tr>
  <td>
    <span data-tooltip="Ticking this box opts you in to the PVP Ladder, unticking it will remove you from the PVP Ladder.">PvP Ladder Opt-in:</span>
  </td>
  {#await init()}
    <td>
      <div>
        <span class="fshSpinner fshSpinner12"></span>
      </div>
    </td>
  {:then result}
    {#if isBoolean(opt)}
      <td>
        {#await togglePromise}
          <div>
            <span class="fshSpinner fshSpinner12"></span>
          </div>
        {:then}
          <input type="checkbox" bind:checked={opt} on:click="{toggle}">
        {/await}
      </td>
    {/if}
  {/await}
</tr>

<style>
  td:nth-child(1) {
    height: 25px;
  }
  td:nth-child(1) span {
    cursor: pointer;
    text-decoration: underline;
  }
  td:nth-child(2) {
    text-align: right;
  }
  td:nth-child(2) div {
    float: right;
    height: 12px;
    position: relative;
    width: 12px;
  }
</style>
