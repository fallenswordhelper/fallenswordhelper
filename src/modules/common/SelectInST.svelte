<script>
  import getValue from '../system/getValue';
  import setValue from '../system/setValue';

  let { dispatchToggle, inSt = $bindable(null) } = $props();

  const prefSelectST = 'selectST';
  inSt = getValue(prefSelectST);

  function toggleSelectST() {
    setValue(prefSelectST, inSt);
    dispatchToggle();
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
