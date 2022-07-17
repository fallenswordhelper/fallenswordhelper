<script>
  import entries from '../../common/entries';
  import { now } from '../../support/now';

  export let theTitans;

  const onCd = ([, data]) => data.coolTime > now();
  const int = ([, a], [, b]) => a.coolTime - b.coolTime;

  const titansOnCooldown = () => entries(theTitans).filter(onCd).sort(int);
</script>

<table>
  <tbody>
    <tr>
      <td class="header">Titan</td>
      <td class="header">Cooldown</td>
      <td class="header">Visible</td>
    </tr>
    {#each titansOnCooldown() as [name, data]}
      <tr>
        <td>{name}</td>
        <td class="cd">{data.cooldownText}</td>
        <td>{data.seen}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 500px;
    margin: auto;
  }
  td {
    text-align: center;
  }
  .cd {
    color: #640000;
    font-weight: bold;
  }
</style>
