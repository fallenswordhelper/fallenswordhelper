<script>
  import daDoInvent from '../_dataAccess/daDoInvent';
  import jsonFail from '../common/jsonFail';

  export let max;
  export let recipeID;
  let amountToInvent = 1;
  let invResults = '';
  let results = [];

	function handleMax() {
		amountToInvent = max;
	}

	function quickInventDone(json) {
		if (jsonFail(json, invResults)) { return; }
		results = [...results, json.r];
	}

  function quickInvent() {
    if (!amountToInvent) {
      results = [];
      invResults = '';
      return;
    }
    invResults = `Inventing ${amountToInvent} Items`;
    for (let i = 0; i < amountToInvent; i += 1) {
      daDoInvent(recipeID).then(quickInventDone);
    }
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
  <a href="#" on:click|preventDefault={handleMax}>(max)</a>
  <br/>
  <input class="custombutton" type="submit" value="Quick Invent"/>
  <!-- inv result container -->
  <div>
    <!-- inv result header -->
    <span>{invResults}</span>
    <!-- inv results -->
    <ol>
    {#each results as r}
      <li>
        {#if r.item}
        <span class="fshGreen">You successfully invented the item {r.item.n}.</span>
        {:else}
        <span class="fshRed">You have failed to invent the item.</span>
        {/if}
      </li>
    {/each}
    </ol>
  </div>
</form>
