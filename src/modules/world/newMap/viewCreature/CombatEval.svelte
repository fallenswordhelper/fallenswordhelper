<script>
  import calf from '../../../support/calf';
  let { title = '', player = {}, enemy = {}, buffs = {}, bonuses = {}} = $props();

  const altVal = d => Math.ceil(calf.generalVariable * d);

  const willIHit = $derived(player.attack > altVal(enemy.defense));
  const willIBeHit = $derived(altVal(enemy.attack) > player.defense);
  const overkill = $derived(player._skills.includes(d => d.id === 109));


  export function update(a, b, c, d) {
    player = a;
    enemy = b;
    buffs = c;
    bonuses = d;
  }

  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) return false;
    }
    return true;
  }

  function buffList() {
    const buffNames = buffs
      .filter(d => !isEmpty(d.bonuses))
      .map(d => d.buff);
    if (buffNames.length === 0) return 'no buffs';
    if (buffNames.length > 1) {
      buffNames[buffNames.length - 1] = `and ${buffNames[buffNames.length - 1]}`;
    }
    if (buffNames.length == 2) {
      return buffNames.join(' ');
    }
    return buffNames.join(', ');
  }

  function damageMessage() {
    if (player.hits > 1) {
      return `(${altVal(enemy.armor) + enemy.hp - player.damage} more damage to one-hit)`;
    }
    const excessDamage = player.damage - enemy.hp - altVal(enemy.armor);
    let msg = `${excessDamage} excess damage`;
    if (!overkill) {
      return `${msg}`;
    }
    if (Math.floor(excessDamage / enemy.hp) > 1) {
      return `${msg}, overkill activates`;
    }
    const damageLeft = (altVal(enemy.armor) + enemy.hp * 2) - player.damage;
    return `${msg}, ${damageLeft} more damage to overkill`;
  }

</script>
&nbsp;
<div id="combat-eval-header">{title}</div>
<div id="combat-eval-bonuses">
  <table id="combat-eval-player-bonuses">
    <tbody>
      <tr>
        <td>Will I hit it:</td>
        {#if willIHit}
        <td>Yes</td>
        <td>({player.attack - altVal(enemy.defense)} excess attack)</td>
        {:else}
        <td>No</td>
        <td>(short {altVal(enemy.defense) - player.attack} attack)</td>
        {/if}
      </tr>
      <tr>
        <td># Hits to kill it:</td>
        {#if !willIHit}
        <td>-</td>
        {:else}
        <td>{player.hits > 20 ? ">20" : player.hits}</td>
        <td>({damageMessage()})</td>
        {/if}
      </tr>
      <tr>
        <td>Will I be hit:</td>
        {#if willIBeHit}
        <td>Yes</td>
        <td>(short {altVal(enemy.attack) - player.defense} defense)</td>
        {:else}
        <td>No</td>
        <td>({player.defense - altVal(enemy.attack)} excess defense)</td>
        {/if}
      </tr>
      <tr>
        <td># Hits to kill me:</td>
        {#if willIBeHit}
        <td>{enemy.hits > 20 ? ">20" : enemy.hits}</td>
        <td>({Math.max(altVal(enemy.damage) - player.armor, 1)} damage per round)</td>
        {:else}
        <td>-</td>
        {/if}
      </tr>
    </tbody>
  </table>
</div>
<p class="fshFooter">
*Accounts for {buffList()} and allow for randomness ({calf.generalVariable}).
</p>
<style>
#combat-eval-header {
  background: #cd9e4b;
  text-align: center;
}
#combat-eval-bonuses table { width: 100%; }
#combat-eval-bonuses table th { text-align: center; }
.fshFooter, .combat-eval-bonus { color: gray; }
.fshFooter {
  font-size: x-small;
}
</style>
