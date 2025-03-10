<script>
  import { slide } from 'svelte/transition';
  import sendEvent from '../../analytics/sendEvent';
  import formatUtcTimestamp from '../../common/formatUtcTimestamp';

  let { entry } = $props();
  let isOpen = $state(false);

  const toggle = () => {
    sendEvent('SE Tracker', 'Expand Row');
    isOpen = !isOpen;
  };
</script>

<div class="expando">
  {#if entry[3].length}
    <button onclick={toggle} aria-expanded={isOpen} type="button">
      {#if isOpen}
        &or;
      {:else}
        &gt;
      {/if}
    </button>
  {/if}
</div>
<div>{entry[0].replaceAll('_', ' ')}</div>
<div class="last-kill">{formatUtcTimestamp(entry[1])}</div>
<div>{entry[2]}</div>

{#if isOpen}
  <div class="wide" transition:slide={{ duration: 300 }}>
    {#each entry[3] as [val, loc]}
      <div></div>
      <div></div>
      <div class="last-kill">{formatUtcTimestamp(val)}</div>
      <div>{loc}</div>
    {/each}
  </div>
{/if}

<style>
  .expando {
    text-align: center;
  }
  button {
    background-color: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    line-height: 1;
    padding: 0;
  }
  .last-kill {
    color: maroon;
    font-weight: bold;
  }
  .wide {
    column-gap: 2px;
    display: grid;
    grid-column-end: span 4;
    grid-template-columns: 20px 200px 128px 260px;
    row-gap: 2px;
  }
</style>
