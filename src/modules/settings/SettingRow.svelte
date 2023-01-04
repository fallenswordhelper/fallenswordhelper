<script>
import '../tooltip/tooltip.css';
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
        [ <div class="fshTooltip">
          ?
          <div class="fshTooltipContent">
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
  vertical-align: middle;
}

td > span {
  vertical-align: text-top;
}

.unstable {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='0 0 27.793 27.793'%3E%3Cpath d='M20.972 0 5.076 15.803h5.896L6.44 27.793l16.276-15.804h-5.897z'/%3E%3C/svg%3E");
  background-size: contain;
  border-bottom: 1px dotted black;
  display: inline-block;
  height: 11px;
  width: 11px;
}
.tooltiptitle {
  color: #FFF380;
  font-weight: bold;
}
</style>
