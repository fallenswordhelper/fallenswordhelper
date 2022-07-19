<script>
import { createEventDispatcher } from 'svelte';
import fshOpen from '../chrome/fshOpen';
import { places, quickbuffUrl } from '../support/constants';
import chunk from './chunk';
import LinkButton from './LinkButton.svelte';

const dispatch = createEventDispatcher();
export let members = [];

const batchText = (i) => `Buff ${places[i]} 16`;

function buffBatch(batch, i, evt) {
  evt.target.blur();
  fshOpen(`${quickbuffUrl}&players=${batch.join(',')}`, 'fsQuickBuff', 618, 1000, ',scrollbars');
  dispatch('buffBatch', batchText(i));
}
</script>

<ul>
  {#each chunk(16, members) as batch, i}
    <li>
      <LinkButton on:click={(e) => buffBatch(batch, i, e)}>{batchText(i)}</LinkButton>
    </li>
  {/each}
</ul>

<style>
  ul {
    --button-size: 84%;
  }
</style>
