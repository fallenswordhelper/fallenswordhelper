<script>
  import { slide } from 'svelte/transition';
  import daDoInvent from '../../_dataAccess/daDoInvent';
  import sendEvent from '../../analytics/sendEvent';
  import LinkButton from '../../common/LinkButton.svelte';

  export let max;
  export let recipeID;
  let amountToInvent = 1;
  let successes = 0;
  let failures = 0;
  let progress = 0;
  let errorMessage = '';

  function reset() {
    successes = 0;
    failures = 0;
    progress = 0;
    errorMessage = '';
  }

  function maxInvent() {
    amountToInvent = max;
    sendEvent('inventing', 'maxInventButton');
  }

  async function quickInvent() {
    sendEvent('inventing', 'quickInvent');
    if (!amountToInvent) { return; }
    reset();
    const requests = Array(amountToInvent).fill(recipeID);
    requests.reduce(async (prev, recipe) => {
      const prevData = await prev;
      if (!prevData || prevData.s === true) {
        const data = await daDoInvent(recipe);
        if (data.s === false) errorMessage = data.e.message;
        else if (data.r.success_count > 0) successes += 1;
        else failures += 1;
        progress = 100 * ((successes + failures) / amountToInvent);
        return data;
      }
      return prevData;
    }, Promise.resolve());
  }
</script>
<form class="fshCenter" on:submit|preventDefault={quickInvent} style="margin-top: 12px;">
  <label for="quick-invent-amount">Select how many to quick invent</label>
  <input
    type="number"
    id="quick-invent-amount"
    name="quick-invent-amount"
    min="0"
    step="1"
    class="custominput fshNumberInput"
    bind:value={amountToInvent}
    required />
  <LinkButton on:click={maxInvent}>(max)</LinkButton>
  <input class="custombutton" type="submit" value="Quick Invent" style="margin-left: 8px;"/>
  <div>
    {#if errorMessage}
    <div style="border: 2px solid #FFF; margin: 10px auto; width: 80%; background: #D3CFC1" transition:slide|local>
      <div style="background: #8E8668; color: #FFF; font-size: smaller">INFORMATION</div>
      <div>{errorMessage}</div>
    </div>
    {/if}
    <div class="composing-progress" style="margin: 0px auto; font-weight: bold; color: #fff; left: 0px;">
      <div class="composing-progress-bar" style="background-position: right top; width: {progress}%; transition: width 0.4s ease-out; position: absolute; top: 0px">
      </div>
      <p style="position: relative;">{successes + failures} / {amountToInvent}</p>
    </div>
    <div style="margin-top: 36px;">
      <div style="display: inline-block; width: 250px;" class="fshQs fshGreen">
        Successes: {successes}
      </div>
      <div style="display: inline-block; width: 250px;" class="fshQs fshRed">
        Failures: {failures}
      </div>
    </div>
  </div>
</form>
