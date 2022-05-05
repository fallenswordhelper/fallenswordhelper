<script>
  import { createEventDispatcher } from 'svelte';
  import getValue from '../system/getValue';
  import setValue from '../system/setValue';

  const dispatch = createEventDispatcher();
  const prefSelectST = 'selectST';

  export let inSt = getValue(prefSelectST);

  function toggleSelectST() {
    setValue(prefSelectST, inSt);
    dispatch('toggle');
  }
</script>

<label>
  <input bind:checked={inSt} on:change={toggleSelectST} type="checkbox">
  Select items in ST
</label>&nbsp;
