<script>
  import fshOpen from '../chrome/fshOpen';
  import { places, quickbuffUrl } from '../support/constants';
  import chunk from './chunk';
  import LinkBtn from './LinkBtn.svelte';

  let { emitBuffBatch, members = [] } = $props();

  const batchText = (i) => `Buff ${places[i]} 16`;

  function buffBatch(batch, i, evt) {
    evt.target.blur();
    fshOpen(
      `${quickbuffUrl}&players=${batch.join(',')}`,
      'fsQuickBuff',
      618,
      1000,
      ',scrollbars',
    );
    emitBuffBatch(batchText(i));
  }
</script>

<ul>
  {#each chunk(16, members) as batch, i (i)}
    <li>
      <LinkBtn onclick={(e) => buffBatch(batch, i, e)}>
        {batchText(i)}
      </LinkBtn>
    </li>
  {/each}
</ul>

<style>
  ul {
    --button-size: 84%;
  }
</style>
