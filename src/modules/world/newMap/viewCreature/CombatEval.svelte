<script>
  let { title = '', player = {}, enemy = {}, buffs = {}, bonuses = {}} = $props();

  const willIHit = player.attack > enemy.defense;
  const willIBeHit = enemy.attack > player.defense;

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

  const statLabels = [
    { label: 'Attack', key: 'attack' },
    { label: 'Damage', key: 'damage' },
    { label: 'Defense', key: 'defense' },
    { label: 'Armor', key: 'armor' },
    { label: 'HP', key: 'hp' },
  ];
</script>
&nbsp;
<div id="combat-eval-header">{title}</div>
<div id="combat-eval-bonuses">
  <table id="combat-eval-player-bonuses">
    <thead><tr><th colspan="2">Player Stats</th></tr></thead>
    <tbody>
      <tr>
        <td>Will I hit it:</td>
        <td>{willIHit ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td># Hits to kill it:</td>
        <td>{willIHit ? player.hits : '-'}</td>
      </tr>
      {#each statLabels as {label, key} (key)}
      <tr>
        <td>{label}:</td>
        <td>
          {player[key]}
          {#if bonuses.player[key]}
          <span class="combat-eval-bonus">({bonuses.player[key] > 0 ? '+' : ''}{bonuses.player[key]})</span>
          {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
  <table id="combat-eval-enemy-bonuses">
    <thead><tr><th colspan="2">Monster Stats</th></tr></thead>
    <tbody>
      <tr>
        <td>Will I be hit:</td>
        <td>{willIBeHit ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>#Hits to kill me:</td>
        <td>{willIBeHit ? enemy.hits : '-'}</td>
      </tr>
      {#each statLabels as {label, key} (key)}
      <tr>
        <td>{label}:</td>
        <td>
          {enemy[key]}
          {#if bonuses.enemy[key]}
          <span class="combat-eval-bonus">({bonuses.enemy[key] > 0 ? '+' : ''}{bonuses.enemy[key]})</span>
          {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>
<p class="fshFooter">
  *Accounts for {buffList()} and allow for randomness (1.1053).
</p>
<style>
#combat-eval-header {
  background: #cd9e4b;
  text-align: center;
}
#combat-eval-bonuses { columns: 2; }
#combat-eval-bonuses table { width: 100%; }
#combat-eval-bonuses table th { text-align: center; }
.fshFooter, .combat-eval-bonus { color: gray; }
.fshFooter {
  font-size: x-small;
}
</style>
