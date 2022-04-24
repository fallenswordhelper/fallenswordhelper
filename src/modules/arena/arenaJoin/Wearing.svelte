<script>
  import WearingGrid from './WearingGrid.svelte';
  import all from '../../common/all';
  import daLoadInventory from '../../_dataAccess/daLoadInventory';
  import daUseCombatSet from '../../_dataAccess/daUseCombatSet';
  import daViewCombatSet from '../../_dataAccess/daViewCombatSet';

  let equipment = 0;
  let combatSets = 0;
  let selected = 0;

  const equipped = ({ a: sa }) => equipment.some(({ a: ea }) => ea === sa);
  const equippedSet = ({ items }) => items.every(equipped);

  async function getCombatSet() {
    const [ms, cs] = await all([daLoadInventory(), daViewCombatSet()]);
    equipment = ms.r.equipment;
    const wornSet = cs.r.find(equippedSet);
    selected = wornSet?.id ?? -1;
    combatSets = [
      ...(!wornSet ? [{ id: -1, name: 'Primary', items: equipment }] : []),
      ...cs.r,
    ];
  }

  async function handleChange() {
    await daUseCombatSet(selected);
    equipment = combatSets.find(({ id }) => id === selected).items;
  }
</script>

{#await getCombatSet() then}
  <div>
    <div class="innerColumnHeader">
      <div class="flex">
        Inventory
        <select bind:value={selected} on:change={handleChange}>
          {#each combatSets as {id, name}}
            <option value="{id}">{name}</option>
          {/each}
        </select>
      </div>
    </div>
    <WearingGrid {equipment}/>
  </div>
{/await}

<style>
  .innerColumnHeader {
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.25rem;
  }
  .flex {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  select {
    max-width: 50%;
  }
</style>
