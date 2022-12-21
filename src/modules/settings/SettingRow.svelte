<script>
import FieldInput from './FieldInput.svelte';
import networkIcon from './networkIcon';

export let field;
export let unstable = false;
export let network = false;
export let label;
export let type = 'checkbox';
</script>
<tr {...$$restProps}>
  <td>
    {#if (unstable)}
    <div class="tooltip">
      <span class="unstable"></span>
      <div class="tooltiptext">
        Warning: Causes page instability
      </div>
    </div>
    {/if}
    {#if (network)}
    {@html networkIcon}
    {/if}
    <label for={field}>
      {label}
      {#if $$slots.tooltip}
      [ <div class="tooltip">
        ?
        <div class="tooltiptext">
        <span class="tooltiptitle">{label}</span><br><br>
        <slot name="tooltip"></slot>
        </div>
        </div> ]:
      {/if}
    </label>
  </td>
  <td>
    <slot name="input">
      <FieldInput field={field} type={type} />
    </slot>
  </td>
</tr>
<style>
  td:first-child {
    text-align: right;
    vertical-align: text-top;
  }
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 300px;
  background-color: black;
  color: #fff;
  text-align: left;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -154px;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltiptitle {
  color: #FFF380;
  font-weight: bold;
}
.unstable {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='0 0 27.793 27.793'%3E%3Cpath d='M20.972 0 5.076 15.803h5.896L6.44 27.793l16.276-15.804h-5.897z'/%3E%3C/svg%3E");
  background-size: contain;
  display: inline-block;
  height: 11px;
  width: 11px;
}
</style>
