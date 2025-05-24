<script>
  import { slide } from 'svelte/transition';
  import daDoInvent from '../../_dataAccess/daDoInvent';
  import sendEvent from '../../analytics/sendEvent';
  import LinkBtn from '../../common/LinkBtn.svelte';

  let { max, recipeID } = $props();

  let inputElement = $state();
  let amountToInvent = $state(1);
  let successes = $state(0);
  let failures = $state(0);
  let progress = $state(0);
  let errorMessage = $state('');

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

  async function serialiseRequests(prev, recipe) {
    const prevData = await prev;
    if (!prevData || prevData.s === true) {
      const data = await daDoInvent(recipe);
      if (!data?.s) errorMessage = data?.e?.message ?? 'Server Error';
      else if (data.r.success_count > 0) successes += 1;
      else failures += 1;
      progress = 100 * ((successes + failures) / amountToInvent);
      return data;
    }
    return prevData;
  }

  function quickInvent() {
    if (!inputElement.checkValidity()) {
      inputElement.reportValidity();
      return;
    }
    sendEvent('inventing', 'quickInvent');
    reset();
    const requests = Array(amountToInvent).fill(recipeID);
    requests.reduce(serialiseRequests, Promise.resolve());
  }
</script>

<div class="qi-container">
  <label for="quick-invent-amount">Select how many to quick invent</label>
  <input
    bind:this={inputElement}
    bind:value={amountToInvent}
    class="custominput"
    min="1"
    required
    step="1"
    type="number"
  />
  <LinkBtn onclick={maxInvent}>(max)</LinkBtn>
  <button class="custombutton" onclick={quickInvent} type="button">
    Quick Invent
  </button>
  <div>
    {#if errorMessage}
      <div class="qi-error-container" transition:slide|local>
        <div class="qi-error-heading">INFORMATION</div>
        <div>{errorMessage}</div>
      </div>
    {/if}
    <div class="composing-progress">
      <div class="composing-progress-bar" style="width: {progress}%;"></div>
      <p>
        {successes + failures} / {amountToInvent}
      </p>
    </div>
    <div class="qi-results-container">
      <div class="qi-result qi-result-success">
        Successes: {successes}
      </div>
      <div class="qi-result qi-result-failure">
        Failures: {failures}
      </div>
    </div>
  </div>
</div>

<style>
  .qi-container {
    border-top-color: #ddd;
    border-top-style: solid;
    border-top-width: 1px;
    margin: 12px auto 0 auto;
    padding-top: 12px;
    text-align: center;
    width: 592px;
  }
  input {
    width: 4em;
  }
  button {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    margin-left: 8px;
  }
  .qi-error-container {
    background: #d3cfc1;
    border: 2px solid #fff;
    margin: 10px auto;
    width: 80%;
  }
  .qi-error-heading {
    background: #8e8668;
    color: #fff;
    font-size: smaller;
  }
  .composing-progress {
    color: #fff;
    font-weight: bold;
    left: 0px;
    margin: 0px auto;
  }
  .composing-progress p {
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 2px;
  }
  .composing-progress-bar {
    background-position: right top;
    position: absolute;
    top: 0px;
    transition: width 0.4s ease-out;
  }
  .qi-results-container {
    margin-top: 36px;
  }
  .qi-result {
    display: inline-block;
    font-weight: bold;
    font-size: large;
    width: 250px;
  }
  .qi-result-success {
    color: green;
  }
  .qi-result-failure {
    color: red;
  }
</style>
