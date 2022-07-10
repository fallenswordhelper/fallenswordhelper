<script>
  import { guildViewUrl, showPlayerUrl } from '../../../support/constants';
  import { cdn } from '../../../system/system';

  export let promise;
</script>

<style>
  table {
    width: 270px;
  }
  tr:nth-child(n+3) {
    border-top: 1px solid #CD9E4B;
  }
  img {
    height: 16px;
    width: 16px;
  }
</style>

{#await promise}
  Loading...
{:then { r: list }}
  <table id="world-event-contrib-table">
    <tr>
      <td class="header"></td>
      <td class="header"></td>
      <td class="header">Username</td>
      <td class="header">Kills</td>
    </tr>
    {#each list as { player, value }, i}
      <tr>
        <td>{i + 1}</td>
        <td>
          {#if player.guild_id}
            <a href="{guildViewUrl}{player.guild_id}">
              <img src="{cdn}guilds/{player.guild_id}_mini.png" alt="guild logo">
            </a>
          {/if}
        </td>
        <td><a href="{showPlayerUrl}{player.name}">{player.name}</a></td>
        <td>{value}</td>
      </tr>
    {/each}
  </table>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
