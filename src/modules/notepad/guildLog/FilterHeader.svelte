<script>
  import { createEventDispatcher } from 'svelte';
  import LinkButtonBracketed from '../../common/LinkButtonBracketed.svelte';

  const dispatch = createEventDispatcher();
  export let filters = null;

  function cbChange() {
    dispatch('cbChange');
  }

  function selectAll() {
    dispatch('selectAll');
  }

  function selectNone() {
    dispatch('selectNone');
  }

  function refresh() {
    dispatch('refresh');
  }
</script>

<div class="filter-header">
  <div bind:this={ filters } class="filters">
    <div class="front">
      <span>Filters:</span>
    </div>
    <div>
      <label>
        Potions:
        <input checked on:change={ cbChange } type="checkbox" value=1>
      </label>
    </div>
    <div>
      <label>
        Store/Recalls:
        <input checked on:change={ cbChange } type="checkbox" value=2>
      </label>
    </div>
    <div>
      <label>
        Relics:
        <input checked on:change={ cbChange } type="checkbox" value=4>
      </label>
    </div>
    <div>
      <label>
        Mercenaries:
        <input checked on:change={ cbChange } type="checkbox" value=5>
      </label>
    </div>
    <div>
      <label>
        Group Combats:
        <input checked on:change={ cbChange } type="checkbox" value=6>
      </label>
    </div>
    <div></div>
    <div>
      <label>
        Donations:
        <input checked on:change={ cbChange } type="checkbox" value=7>
      </label>
    </div>
    <div>
      <label>
        Rankings:
        <input checked on:change={ cbChange } type="checkbox" value=8>
      </label>
    </div>
    <div>
      <label>
        GvGs:
        <input checked on:change={ cbChange } type="checkbox" value=9>
      </label>
    </div>
    <div>
      <label>
        Tag/UnTags:
        <input checked on:change={ cbChange } type="checkbox" value=3>
      </label>
    </div>
    <div>
      <label>
        Titans:
        <input checked on:change={ cbChange } type="checkbox" value=10>
      </label>
    </div>
    <div>
      <label>
        Other:
        <input checked on:change={ cbChange } type="checkbox" value=0>
      </label>
    </div>
  </div>
  <div class="buttons">
    <div><LinkButtonBracketed on:click={ selectAll }>Select All</LinkButtonBracketed></div>
    <div><LinkButtonBracketed on:click={ selectNone }>Select None</LinkButtonBracketed></div>
    <div><LinkButtonBracketed on:click={ refresh }>Refresh</LinkButtonBracketed></div>
  </div>
</div>

<style>
  .filter-header {
    margin-bottom: 4px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .filters {
    align-items: center;
    color-scheme: light;
    display: grid;
    gap: 2px;
    grid-template-columns: 48px repeat(6, 1fr);
    justify-items: end;
  }
  .front {
    font-weight: bold;
    grid-column: 1;
    grid-row: 1 / 3;
  }
  .buttons {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 8px;
  }
</style>
