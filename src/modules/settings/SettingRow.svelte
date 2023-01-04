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
      <span class="unstable" data-tooltip="Warning: Causes page instability"></span>
    {/if}
    {#if (network)}
      {@html networkIcon}
    {/if}
    <label for={field}>
      {label}
      {#if $$slots.tooltip}
        [
        <div class="tooltip">
          ?
          <div class="tooltiptext">
            <span class="tooltiptitle">{label}</span><br><br>
            <slot name="tooltip"></slot>
          </div>
        </div>
        ]:
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
  vertical-align: middle;
}

td > span {
  vertical-align: text-top;
}

.tooltip {
  border-bottom: 1px dotted black;
  display: inline-block;
  position: relative;
}

.tooltip .tooltiptext {
  background-color: black;
  border-radius: 6px;
  bottom: 150%;
  color: #fff;
  left: 50%;
  margin-left: -154px;
  padding: 5px;
  position: absolute;
  text-align: left;
  visibility: hidden;
  width: 300px;
  z-index: 1;
}

.tooltip .tooltiptext::after {
  border-color: black transparent transparent transparent;
  border-style: solid;
  border-width: 5px;
  content: "";
  left: 50%;
  margin-left: -5px;
  position: absolute;
  top: 100%;
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
  border-bottom: 1px dotted black;
  display: inline-block;
  height: 11px;
  width: 11px;
}
</style>
