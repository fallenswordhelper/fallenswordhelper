<script>
  import daViewCombatSet from '../../_dataAccess/daViewCombatSet';
  import sendEvent from '../../analytics/sendEvent';
  import ModalTitled from '../../modal/ModalTitled.svelte';

  export let visible = true;

  function close() {
    sendEvent('setmgr', 'close');
    visible = false;
  }
</script>

<ModalTitled {visible} on:close={close}>
  <svelte:fragment slot="title">Combat Set Manager</svelte:fragment>
  <div class="container">
    {#await daViewCombatSet()}
      <p>loading...</p>
    {:then json}
      <div>Combat Set</div>
      <div>Helmet</div>
      <div>Armor</div>
      <div>Gloves</div>
      <div>Boots</div>
      <div>Weapon</div>
      <div>Shield</div>
      <div>Ring</div>
      <div>Amulet</div>
      <div>Rune</div>
      {#each json.r as { name, items }, i (i)}
        <div class="data">{name}</div>
        {#each items.sort(({ t: a }, { t: b }) => a - b) as { l, n }}
          <div class="data">{l} {n}</div>
        {/each}
      {/each}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</ModalTitled>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    max-width: 800px;
    min-width: 480px;
  }
  .data {
    white-space: nowrap;
  }
</style>
