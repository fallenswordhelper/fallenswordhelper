<script>
  import { slide } from 'svelte/transition';
  import sendEvent from '../../analytics/sendEvent';
  import formatUtcTimestamp from '../../common/formatUtcTimestamp';
  import { defSubcmd, guideUrl } from '../../support/constants';

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
<div>
  {#if entry[4] > 0}
    <a
      href="{guideUrl}creatures{defSubcmd}view&creature_id={entry[4]}"
      target="_blank"
    >
      {entry[0].replaceAll('_', ' ')}
    </a>
  {:else}
    {entry[0].replaceAll('_', ' ')}
  {/if}
</div>
<div class="last-kill">{formatUtcTimestamp(entry[1])}</div>
<div>
  <a
    href="{guideUrl}realms&search_name={encodeURIComponent(entry[2])}"
    target="_blank"
  >
    {entry[2]}
  </a>
</div>

{#if isOpen}
  <div class="wide" transition:slide={{ duration: 300 }}>
    {#each entry[3] as [val, loc], i (i)}
      <div></div>
      <div></div>
      <div class="last-kill">{formatUtcTimestamp(val)}</div>
      <div>
        <a
          href="{guideUrl}realms&search_name={encodeURIComponent(loc)}"
          target="_blank"
        >
          {loc}
        </a>
      </div>
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
  a {
    color: #383838;
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
