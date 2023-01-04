<script>
import getValue from '../system/getValue';

export let field;
export let options;
const value = getValue(field);
</script>

<select {...$$restProps} id={field} name={field} value={value.toString()}>
  {#each options as opt}
  <option value={opt.value}>
    {opt.text}
  </option>
  {/each}
</select>
