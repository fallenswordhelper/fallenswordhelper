<script>
  import Cooldown from './Cooldown.svelte';
  import TitanFilter from './TitanFilter.svelte';

  let { theTitans, titanRows } = $props();
</script>

<tr>
  <td colspan="3">
    <Cooldown {theTitans} />
    <TitanFilter {theTitans} {titanRows} />
  </td>
</tr>
