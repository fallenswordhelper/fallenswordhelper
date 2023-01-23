<script>
import getValue from '../system/getValue';

export let field;
export let type = 'checkbox';

const props = {};
if (type === 'checkbox' || type === 'radio') {
  props.checked = getValue(field);
  props.value = 'true';
} else {
  props.value = getValue(field);
}
</script>

<input 
  {...$$restProps}
  type={type}
  name={field}
  id={field}
  {...props}
>

<style>
input[type=checkbox] {
  vertical-align: middle;
}
input[type=text] {
  width: 80%;
}
input[type=number] {
  vertical-align: middle;
  width: 40px;
}
</style>
