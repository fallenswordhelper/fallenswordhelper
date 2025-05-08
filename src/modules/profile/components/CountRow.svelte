<script>
  import sendEvent from '../../analytics/sendEvent';
  import LinkBtnBracketed from '../../common/LinkBtnBracketed.svelte';
  import playerId from '../../common/playerId';
  import { cdn } from '../../system/system';
  import { compStore } from './componentsStore';

  let { dispatchDelType, itemId } = $props();

  let item = $derived($compStore.get(itemId));

  let delTypeEnabled = true;

  const pid = playerId();
  const imgSrc = (m) => `${cdn}items/${m.get('b')}.gif`;
  const tipped = (m) =>
    `fetchitem.php?item_id=${m.get('b')}&inv_id=${m.get('a')}&t=2&p=${
      pid
    }&vcode=${m.get('v')}`;

  function delType() {
    if (delTypeEnabled) {
      delTypeEnabled = false;
      sendEvent('components', 'delType');
      dispatchDelType(itemId);
    }
  }
</script>

{#if item.get('del').length}
  <tr>
    <td>
      <img
        src={imgSrc(item)}
        class="tip-dynamic"
        data-tipped={tipped(item)}
        alt="component"
      />
    </td>
    <td>{item.get('del').length}</td>
    {#if item.get('delPending')}
      <td class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></td>
    {:else}
      <td>
        <LinkBtnBracketed onclick={delType}>Del</LinkBtnBracketed>
      </td>
    {/if}
  </tr>
{:else}
  <tr><td class="compDel" colspan="3">Deleted</td></tr>
{/if}

<style>
  .compDel {
    background-color: rgb(0, 0, 0, 0.25);
    height: 20px;
  }
</style>
