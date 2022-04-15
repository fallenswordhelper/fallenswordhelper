<script>
  import Cooldown from './Cooldown.svelte';
  import TitanFilter from './TitanFilter.svelte';

  export let theTitans;
  export let titanRows;
</script>

<tr>
  <td colspan="3">
    <Cooldown {theTitans}/>
    <TitanFilter {theTitans} {titanRows}/>
  </td>
</tr>
