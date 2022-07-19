<script>
import { onDestroy } from 'svelte';

import sendEvent from '../../../analytics/sendEvent';
import BuffLinks from '../../../common/BuffLinks.svelte';
import { buffs } from './buffStore';
import { defenders } from './defendersStore';
import {
  buffResultDisplay,
  defBuffedDisplay,
  ldcloak,
  processed,
  rawDefDisplay,
  rawGroupDisplay,
  relicDisplay,
} from './displayStore';
import { hasGroup } from './groupStore';
import Missing from './Missing.svelte';
import { guildId } from './relicStore';
import { trackStatus } from './statusStore';

export let relicData = {};
const members = relicData.defenders.map((x) => x.player_name);
let showStats = false;

function buffBatch(e) { sendEvent('relic', e.detail); }

function fetchStats() {
  sendEvent('relic', 'fetchStats');
  showStats = true;
  guildId.set(relicData.controlled_by.guild_id);
  defenders.set(members);
  hasGroup.set(GameData.player().hasGroup);
  buffs.set(GameData.player().buffs);
}

onDestroy(() => {
  showStats = false;
  guildId.set(0);
  defenders.set([]);
  hasGroup.set(0);
  buffs.set([]);
});
</script>

<div class="body">
  <div class="left">
    {#if relicData.is_owner}
      <div class="buff-links">
        <BuffLinks {members} on:buffBatch={ buffBatch }/>
      </div>
    {/if}
    {#if !showStats}
      <button class="custombutton" on:click={ fetchStats } type="button">Fetch Stats</button>
    {:else}
      <div class="b-top">
        Processing
      </div>
      <div class="proc-stat">
        { $trackStatus }
      </div>
      <div class="b-top">
        Assumptions
      </div>
      <div class="assume">
        Above calculations include Constitution, Fortitude, Nightmare Visage, Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that order) on both the defending group and attacking group.
      </div>
    {/if}
  </div>
  {#if showStats}
    <div class="middle">
      <div class="b-top">Defending Guild Stats</div>
      <div class="stat-grid">
        <div>Relic Count:</div><div>{ $relicDisplay.noOfRelics }</div>
        <div>Lead Defender Bonus:</div><div>{ $relicDisplay.leadDefenderBonus }</div>
        <div>Lead Defender Cloaked:</div><div>{ $ldcloak }</div>
      </div>
      <div class="b-top">Other Defender Stats</div>
      <div class="stat-grid">
        <div>Raw Attack:</div><div>{ $rawDefDisplay.attackValue }</div>
        <div>Attack w/ buffs:</div><div>{ $defBuffedDisplay.attack }</div>
        <div>Raw Defense:</div><div>{ $rawDefDisplay.defenseValue }</div>
        <div>Defense w/buffs:</div><div>{ $defBuffedDisplay.defense }</div>
        <div>Raw Armor:</div><div>{ $rawDefDisplay.armorValue }</div>
        <div>Armor w/ buffs:</div><div>{ $defBuffedDisplay.armor }</div>
        <div>Raw Damage:</div><div>{ $rawDefDisplay.damageValue }</div>
        <div>Damage w/ buffs:</div><div>{ $defBuffedDisplay.damage }</div>
        <div>Raw HP:</div><div>{ $rawDefDisplay.hpValue }</div>
        <div>HP w/ buffs:</div><div>{ $defBuffedDisplay.hp }</div>
        <div>Cloaked:</div><div>{ $rawDefDisplay.cloaked }</div>
        <div>Processed:</div><div>{ $processed }</div>
      </div>
    </div>
    <div class="right">
      <div class="b-top">Adjusted Defense Values</div>
      <div class="stat-grid">
        <div>DC225:</div><div>{ $defBuffedDisplay.dc225 }</div>
        <div>DC175:</div><div>{ $defBuffedDisplay.dc175 }</div>
        <div>&nbsp;</div>
      </div>
      <div class="b-top">Attacking Group Stats</div>
      <div class="stat-grid">
        <div>Raw Group Attack:</div><div>{ $rawGroupDisplay.attack }</div>
        <div>Group Attack w/ buffs:</div><div>{ $buffResultDisplay.attack }</div>
        <div>Raw Group Defense:</div><div>{ $rawGroupDisplay.defense }</div>
        <div>Group Defense w/ buffs:</div><div>{ $buffResultDisplay.defense }</div>
        <div>Raw Group Armor:</div><div>{ $rawGroupDisplay.armor }</div>
        <div>Group Armor w/ buffs:</div><div>{ $buffResultDisplay.armor }</div>
        <div>Raw Group Damage:</div><div>{ $rawGroupDisplay.damage }</div>
        <div>Group Damage w/ buffs:</div><div>{ $buffResultDisplay.damage }</div>
        <div>Raw Group HP:</div><div>{ $rawGroupDisplay.hp }</div>
        <div>Group HP w/ buffs:</div><div>{ $buffResultDisplay.hp }</div>
      </div>
    </div>
    <div class="bottom b-top">
      <Missing {members}/>
    </div>
  {/if}
</div>

<style>
  .body {
    display:grid;
    gap: 10px;
    grid-template-columns: 105px 165px 165px;
    grid-template-areas:
      "left middle right"
      "bottom bottom bottom";
    margin-top: 5px;
  }
  .left {
    grid-area: left;
  }
  .buff-links {
    margin-bottom: 6px;
  }
  .b-top {
    border-top-color: black;
    border-top-style: solid;
    border-top-width: 2px;
  }
  .proc-stat {
    color: green;
    font-size: x-small;
  }
  .assume {
    color: gray;
    font-size: x-small;
  }
  .middle {
    grid-area: middle;
  }
  .stat-grid {
    display: grid;
    font-size: x-small;
    grid-template-columns: 70% 30%;
  }
  .stat-grid div {
    text-align: right;
  }
  .stat-grid div:nth-of-type(odd) {
    color: brown;
  }
  .right {
    grid-area: right;
  }
  .bottom {
    grid-area: bottom;
  }
</style>
