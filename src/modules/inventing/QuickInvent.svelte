<script>
  import daDoInvent from '../_dataAccess/daDoInvent';
  import { sendEvent } from '../support/fshGa';

  export let max;
  export let recipeID;
  let amountToInvent = 1;
  let invResults = '';
  let results = [];

  function maxInvent() {
    amountToInvent = max;
    sendEvent('inventing', 'maxInventButton');
  }

  async function quickInvent() {
    sendEvent('inventing', 'quickInvent');
    results = [];
    invResults = '';
    if (!amountToInvent) { return; }
    invResults = `Inventing ${amountToInvent} Items`;
    const requests = Array(amountToInvent).fill(recipeID);
    requests.reduce(async (prev, recipe) => {
      await prev;
      return daDoInvent(recipe).then((json) => {
        results = [...results, json];
        if (json.e.message) { throw Error('Inventing failure'); }
      });
    }, Promise.resolve());
  }
</script>
<form class="fshCenter" on:submit|preventDefault={quickInvent}>
  <label for="quick-invent-amount">Select how many to quick invent</label>
  <input
    type="number"
    id="quick-invent-amount"
    name="quick-invent-amount"
    min="0"
    step="1"
    class="custominput fshNumberInput"
    bind:value={amountToInvent} />
  <a id="max-invent" href="#max" on:click|preventDefault={maxInvent}>(max)</a>
  <br/>
  <input class="custombutton" type="submit" value="Quick Invent"/>
  <div>
    <span>{invResults}</span>
    <ol>
    {#each results as json}
      <li>
        {#if !json.s }
        <span>{json.e.message}</span>
        {:else if json.r.item}
        <span class="fshGreen">You successfully invented the item {json.r.item.n}.</span>
        {:else}
        <span class="fshRed">You have failed to invent the item.</span>
        {/if}
      </li>
    {/each}
    </ol>
  </div>
</form>
