<script>
import FieldInput from './FieldInput.svelte';

export let field;
export let unstable = false;
export let network = false;
export let label;
export let tooltip = false;
export let type = 'checkbox';
</script>
<tr {...$$restProps}>
  <td>
    {#if (unstable)}
    <span class="unstable" data-tooltip="Warning: Causes page instability"></span>
    {/if}
    {#if (network)}
    <span data-tooltip="This function retrieves data from the network. Disable this to increase speed"><img class="networkIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==" width="16" height="16" alt="Uses data"></span>
    {/if}
    <label for={field}>
      {label}
      {#if (tooltip)}
      [ <span class="fshLink tip-static" data-tipped={tooltip}>?</span> ]:
      {/if}
    </label>
  </td>
  <td>
    <slot>
      <FieldInput field={field} type={type} />
    </slot>
  </td>
</tr>
<style>
  td:first-child {
    text-align: right;
    vertical-align: text-top;
  }
</style>
