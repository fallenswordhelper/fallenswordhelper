<script>
import getValue from '../system/getValue';

export let field;
export let options;

let value = getValue(field);
</script>
<select {...$$restProps} name={field} id={field} bind:value={value}>
  {#each options as opt}
  <option value={opt.value}>
    {opt.text}
  </option>
  {/each}
</select>
