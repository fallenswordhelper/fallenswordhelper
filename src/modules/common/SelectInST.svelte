<script>
  import { createEventDispatcher } from 'svelte';
  import getValue from '../system/getValue';
  import setValue from '../system/setValue';

  const dispatch = createEventDispatcher();
  const prefSelectST = 'selectST';

  /**
   * @typedef {Object} Props
   * @property {any} [inSt]
   */

  /** @type {Props} */
  let { inSt = $bindable(null) } = $props();
  inSt = getValue(prefSelectST);

  function toggleSelectST() {
    setValue(prefSelectST, inSt);
    dispatch('toggle');
  }
</script>

<label>
  <input bind:checked={inSt} onchange={toggleSelectST} type="checkbox" />
  Select items in ST
</label>

<style>
  input {
    vertical-align: text-top;
  }
</style>
