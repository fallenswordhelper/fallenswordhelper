<script>
  import { oldActionSpinner } from '../support/constants';

  export let isOnLadder;
  export let toggleLadder;

  let opt;
  async function init() {
    opt = await isOnLadder();
  }
  const loadPromise = init();

  let togglePromise;

  function toggle() {
    opt = !opt;
    togglePromise = toggleLadder(opt);
  }
</script>
<style>
  button {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
  }
</style>
<tr>
  <td height="25" colspan="2" class="fshCenter">
{#await loadPromise}
<img src={oldActionSpinner} alt="loading" style="display: inline;"/>
{:then}
    {#await togglePromise}
    <img src={oldActionSpinner} alt="loading" style="display: inline;"/>
    {:then}
    <button type="button" class="custombutton" on:click="{toggle}">
      {#if opt}
      PvP Ladder Opt-out
      {:else}
      PvP Ladder Opt-in
      {/if}
    </button>
  {/await}
{/await}
  </td>
</tr>
