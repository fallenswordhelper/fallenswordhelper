<script>
  import FolderButtons from '../../../common/FolderButtons.svelte';

  let { doFilter, inv = { folders: {} } } = $props();
</script>

<tr class="fshCenter">
  <td colspan="3">
    <FolderButtons {doFilter} folders={inv.folders} />
  </td>
</tr>

<style>
  td {
    --button-color: black;
    --button-margin: auto 3px;
    padding: 2px 0;
  }
</style>
