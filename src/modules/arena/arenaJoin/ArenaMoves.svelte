<script>
  import { cdn } from '../../system/system';
  import usesetup from '../../app/arena/usesetup';

  export let res = 0;

  let currentSet = 0;
  let selected = 0;
  let sets = 0;

  const findSet = ({ slots }) => slots.join() === currentSet.slots.join();

  (function init() {
    currentSet = res.current_set;
    sets = [
      ...(!res.sets.some(findSet) ? [currentSet] : []),
      ...res.sets,
    ];
    selected = sets.find(findSet).id;
  }());

  async function handleChange() {
    await usesetup(selected);
    currentSet = sets.find(({ id }) => id === selected);
  }
</script>

<div class="ams">
  <select bind:value={selected} on:change={handleChange}>
    {#each sets as {id, name}}
      <option value="{id}">{name}</option>
    {/each}
  </select>
</div>
<div class="amf">
  {#each currentSet.slots as move}
    <img alt="Move" src="{cdn}arena/{move ? move - 1 : 'x'}.png">
  {/each}
</div>

<style>
  .ams {
    max-width: 20%;
  }
  select {
    max-width: 100%;
  }
  .amf {
    display: flex;
  }
</style>
