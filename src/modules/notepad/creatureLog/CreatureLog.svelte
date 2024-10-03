<script>
  import sendEvent from '../../analytics/sendEvent';
  import alpha from '../../common/alpha';
  import entries from '../../common/entries';
  import LinkButtonBracketed from '../../common/LinkButtonBracketed.svelte';
  import confirm from '../../modal/confirm';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import addCommas from '../../system/addCommas';
  import { get, set } from '../../system/idb';
  import { cdn } from '../../system/system';

  export let visible = true;

  function close() {
    sendEvent('Creature Log', 'close');
    visible = false;
  }

  let log = [];
  let sortDirection = 1;
  let lastSort = '';

  const entitySort = ([a], [b]) => sortDirection * alpha(a, b);
  const classSort = ([, a], [, b]) => sortDirection * alpha(a, b);
  const levelSort = ([, , a], [, , b]) => sortDirection * (a - b);

  function sortWrapper(sortFn, type) {
    sortDirection = lastSort === type ? sortDirection : 1;
    log = log.slice().sort(sortFn);
    lastSort = type;
    sortDirection *= -1;
  }

  function sortEntity() {
    sendEvent('Creature Log', 'sort by entity');
    sortWrapper(entitySort, 'entity');
  }

  function sortClass() {
    sendEvent('Creature Log', 'sort by class');
    sortWrapper(classSort, 'class');
  }

  function sortLevel() {
    sendEvent('Creature Log', 'sort by level');
    sortWrapper(levelSort, 'level');
  }

  async function init() {
    const logObj = await get('fsh_monsterLog');
    if (!logObj) return;
    log = entries(logObj).map(([entity, obj]) => [
      entity,
      obj.creature_class,
      obj.level,
      obj.attack,
      obj.defense,
      obj.armor,
      obj.damage,
      obj.hp,
      obj.enhancements ? entries(obj.enhancements) : 0,
      obj.image_id,
    ]);
    sortWrapper(levelSort, 'level');
  }

  async function clearStorage() {
    sendEvent('Creature Log', 'clear storage');
    const yes = await confirm('Are you sure you want to clear your log?');
    if (yes) {
      log = [];
      set('fsh_monsterLog', '');
    }
  }
</script>

<ModalTitled {visible} on:close={close}>
  <svelte:fragment slot="title">Creature Log</svelte:fragment>
  <div class="title">
    <span class="bold">Entity Information</span>
    <LinkButtonBracketed
      --button-color="white"
      --button-width="2.8em"
      on:click={clearStorage}
    >
      Clear
    </LinkButtonBracketed>
  </div>
  <div class="grid headings">
    <div>
      <button class="sortable" on:click={sortEntity} type="button"
        >Entity</button
      >
    </div>
    <div>
      <button class="sortable" on:click={sortClass} type="button">Class</button>
    </div>
    <div>
      <button class="sortable" on:click={sortLevel} type="button">Lvl</button>
    </div>
    <div>Attack</div>
    <div>Defense</div>
    <div>Armor</div>
    <div>Damage</div>
    <div>HP</div>
    <div>Enhancements</div>
  </div>
  {#await init() then}
    {#if log.length}
      <div class="data grid">
        {#each log as [entity, classname, lvl, attack, defense, armor, damage, hp, enhancement, image]}
          <div class="entity">
            <div
              class="image tip-static"
              data-tipped="<img height=200 src='{cdn}creatures/{image}.png' width=200>"
              style:background-image="url('{cdn}creatures/{image}.png')"
            ></div>
            <div>{entity}</div>
          </div>
          <div>{classname}</div>
          <div>{addCommas(lvl)}</div>
          <div>{attack.min} - {attack.max}</div>
          <div>{defense.min} - {defense.max}</div>
          <div>{armor.min} - {armor.max}</div>
          <div>{damage.min} - {damage.max}</div>
          <div>{hp.min} - {hp.max}</div>
          <div>
            {#if enhancement}
              {#each enhancement as [enh, { min, max }]}
                <div class="enhancements">{enh}: {min} - {max}</div>
              {/each}
            {:else}
              <div class="missing">**Missing**</div>
            {/if}
          </div>
        {/each}
      </div>
    {:else}
      <div class="no-mobs">
        No monster information! Please enable creature log and travel a bit to
        see the world
      </div>
    {/if}
  {/await}
</ModalTitled>

<style>
  .title,
  .headings,
  .data {
    width: 100%;
  }
  .title {
    background-color: black;
    color: white;
    display: grid;
    grid-template-columns: 90% 10%;
    justify-items: center;
  }
  .bold {
    font-weight: bold;
  }
  button {
    background-color: transparent;
    border-width: 0;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    opacity: 1;
    padding: 0;
    transition: opacity 200ms;
  }
  button:hover {
    opacity: 0.8;
  }
  .sortable {
    text-align: left;
    text-decoration: underline;
    width: 100%;
  }
  .headings {
    background-color: #e2b960;
  }
  .grid {
    align-items: center;
    column-gap: 2px;
    display: grid;
    grid-template-columns: 160px 68px 36px repeat(5, 52px) 114px;
    row-gap: 2px;
  }
  .data {
    font-size: 11px;
  }
  .entity {
    align-items: center;
    column-gap: 2px;
    display: grid;
    grid-template-columns: 40px 1fr;
  }
  .image {
    background-repeat: no-repeat;
    background-size: contain;
    height: 40px;
    width: 40px;
  }
  .enhancements {
    font-size: 9px;
    white-space: nowrap;
  }
  .missing {
    color: gray;
  }
  .no-mobs {
    padding: 8px;
    text-align: center;
  }
</style>
