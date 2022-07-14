<script>
  import view from '../../app/arena/view';
  import addCommas from '../../system/addCommas';
  import getUrlParameter from '../../system/getUrlParameter';
  import ArenaFlag from './ArenaFlag.svelte';
  import ArenaMoves from './ArenaMoves.svelte';

  const pvpId = Number(getUrlParameter('pvp_id'));
  let res = 0;
  let thisArena = 0;

  const findArena = (r) => r.arenas.find((e) => e.id === pvpId);

  async function getArenaView() {
    const json = await view();
    if (json.s) {
      res = json.r;
      thisArena = findArena(json.r);
    } else throw new Error(json.e.message);
  }
</script>

{#await getArenaView() then}
  <div class="ajf">
    <ArenaFlag title="Players" flag="{thisArena.players.length} / {thisArena.max_players}" />
    <ArenaFlag title="Specials" flag={thisArena.specials} />
    <ArenaFlag title="Hell Forge" flag={thisArena.hellforge} />
    <ArenaFlag title="Epic" flag={thisArena.epic} />
    <ArenaFlag title="Max Equip Level" flag={addCommas(thisArena.equip_level)} />
  </div>
  {#if thisArena.specials}
    <div class="ajf">
      <ArenaMoves {res}/>
    </div>
  {/if}
{:catch error}
  <div class="ajf">
    <div>
      <p>{error.message}</p>
    </div>
  </div>
{/await}

<style>
  .ajf {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .ajf :global(div) {
    padding: 2px;
    text-align: center;
  }
  p {
    color: red;
  }
</style>
