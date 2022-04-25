<script>
  import WearingGrid from './WearingGrid.svelte';
  import all from '../../common/all';
  import createDocument from '../../system/createDocument';
  import daLoadInventory from '../../_dataAccess/daLoadInventory';
  import daUseCombatSet from '../../_dataAccess/daUseCombatSet';
  import daViewCombatSet from '../../_dataAccess/daViewCombatSet';
  import getText from '../../common/getText';
  import querySelector from '../../common/querySelector';
  import querySelectorArray from '../../common/querySelectorArray';
  import retryAjax from '../../ajax/retryAjax';
  import setText from '../../dom/setText';

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

  const getStatCells = (doc) => querySelectorArray('table[width="300"] b', doc)
    .slice(1)
    .map((b) => querySelector('td', b.parentNode.nextElementSibling.children[0]));

  async function handleChange() {
    await daUseCombatSet(selected);
    const html = await retryAjax(window.location.href);
    equipment = combatSets.find(({ id }) => id === selected).items;
    const doc = createDocument(html);
    const upd = getStatCells(doc).map((td) => getText(td));
    getStatCells().forEach((td, i) => setText(upd[i], td));
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
