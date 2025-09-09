<script>
  let {player = {}, enemy = {}, bonuses = {}} = $props();

  const willIHit = player.attack > enemy.defense;
  const willIBeHit = enemy.attack > player.defense;

  export function update(a, b, c) {
    player = a;
    enemy = b;
    bonuses = c;
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
<div id="combat-eval-header">Combat Evaluation</div>
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
          {#if bonuses.player[key]}({bonuses.player[key] > 0 ? '+' : ''}{bonuses.player[key]}){/if}
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
  *Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV,
  Sanctuary, Constitution, Fortitude, Chi Strike and
  Terrorize (if active) and allow for randomness (1.1053).
  Constitution, NMV, Fortitude and Chi Strike apply to group
  stats.
</p>
<style>
#combat-eval-header {
  background: #cd9e4b;
  text-align: center;
}
#combat-eval-bonuses { columns: 2; }
#combat-eval-bonuses table { width: 100%; }
#combat-eval-bonuses table th { text-align: center; }
.combat-eval-bonus { color: gray; }
</style>
