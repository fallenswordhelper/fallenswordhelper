<script>
  import daBuyBuffs from '../_dataAccess/daBuyBuffs';
  import { oldActionSpinner } from '../support/constants';

  export let packageId;
  let promise;
  let showButton = true;

  function buyBuff() {
    showButton = false;
    promise = daBuyBuffs(packageId);
  }
</script>
{#if showButton}
<input
  value="Buy"
  type="button"
  style="margin-bottom: 5px;"
  on:click={buyBuff} />
{:else}
{#await promise}
<img src={oldActionSpinner} alt="loading" />
{:then response}
{#if response === undefined}
<span style="background-color: rgb(177, 177, 177);">Can't to connect to FS servers</span>
{:else if response.s === false}
<span style="background-color: rgb(177, 177, 177);">{response.e.message}</span>
{:else}
<span style="background-color: rgb(159, 247, 160);">Buffs have been applied</span>
{/if}
{/await}
{/if}
