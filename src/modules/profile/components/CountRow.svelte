<script>
  import { createEventDispatcher } from 'svelte';
  import sendEvent from '../../analytics/sendEvent';
  import LinkButtonBracketed from '../../common/LinkButtonBracketed.svelte';
  import playerId from '../../common/playerId';
  import { cdn } from '../../system/system';
  import { compStore } from './componentsStore';

  export let itemId;

  const dispatch = createEventDispatcher();
  const pid = playerId();
  const imgSrc = (m) => `${cdn}items/${m.get('b')}.gif`;
  const tipped = (m) => `fetchitem.php?item_id=${m.get('b')}&inv_id=${m.get('a')}&t=2&p=${
    pid}&vcode=${m.get('v')}`;

  let item;

  $: item = $compStore.get(itemId);

  function delType() {
    sendEvent('components', 'delType');
    dispatch('delType', itemId);
  }
</script>

<style>
  .compDel {
    background-color: rgb(0, 0, 0, 0.25);
    height: 20px;
  }
</style>

{#if item.get('del').length}
  <tr>
    <td>
      <img src={imgSrc(item)} class="tip-dynamic" data-tipped={tipped(item)} alt="component">
    </td>
    <td>{item.get('del').length}</td>
    {#if item.get('delPending')}
      <td class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></td>
    {:else}
      <td><LinkButtonBracketed on:click|once={delType}>Del</LinkButtonBracketed></td>
    {/if}
  </tr>
{:else}
  <tr><td class="compDel" colspan="3">Deleted</td></tr>
{/if}
