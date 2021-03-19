<script>
  import daDoInvent from '../_dataAccess/daDoInvent';
  import { sendEvent } from '../support/fshGa';
  import { slide } from 'svelte/transition';

  export let max;
  export let recipeID;
  let amountToInvent = 5;
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
      const data = await prev;
      if (!data || data.s) {
        const json = await daDoInvent(recipe);
        if (!json.s) errorMessage = json.e.message;
        else if (json.r.item) successes += 1;
        else failures += 1;
        progress = 100 * ((successes + failures) / amountToInvent);
        return json;
      }
      return data;
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
  <button type="button" class="fshBl" on:click={maxInvent}>(max)</button>
  <input class="custombutton" type="submit" value="Quick Invent" style="margin-left: 8px;"/>
  <div>
    {#if errorMessage}
    <div style="border: 2px solid #FFF; margin: 10px auto; width: 80%; background: #D3CFC1" transition:slide|local>
      <div style="background: #8E8668; color: #FFF; font-size: smaller">INFORMATION</div>
      <div>{errorMessage}</div>
    </div>
    {/if}
    <div class="composing-progress" style="margin: 0px auto; position: initial;">
      <div class="composing-progress-bar" style="background-position: right top; width: {progress}%; transition: width 0.4s ease-out;"></div>
    </div>
    <div>
      <div style="display: inline-block; width: 250px;" class="fshQs fshGreen">
        Successes: {successes}
      </div>
      <div style="display: inline-block; width: 250px;" class="fshQs fshRed">
        Failures: {failures}
      </div>
    </div>
  </div>
</form>
