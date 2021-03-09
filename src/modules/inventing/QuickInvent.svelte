<script>
  import daDoInvent from '../_dataAccess/daDoInvent';
  import { sendEvent } from '../support/fshGa';

  export let max;
  export let recipeID;
  let amountToInvent = 1;
  let invResults = '';
  let results = [];

  function highlight(node, { duration }) {
    
    return {
      duration,
      css: (t) => {
        return `background-color: rgba(202, 151, 62, ${1 - t});`
      }
    }
  }

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
      const data = await prev;
      if (!data || data.s) {
        const json = await daDoInvent(recipe);
        results = [json, ...results];
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
  <a id="max-invent" href="#max" on:click|preventDefault={maxInvent}>(max)</a>
  <input class="custombutton" type="submit" value="Quick Invent" style="margin-left: 8px;"/>
  <div>
    <span>{invResults}</span>
    <ol id="invResults">
    {#each results as json}
      <li in:highlight="{{duration: 1000}}">
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
