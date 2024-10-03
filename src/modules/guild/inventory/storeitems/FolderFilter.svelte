<script>
  import FolderButtons from '../../../common/FolderButtons.svelte';

  export let inv = { folders: {} };
</script>

<tr class="fshCenter">
  <td colspan="3">
    <FolderButtons folders={inv.folders} on:filter />
  </td>
</tr>

<style>
  td {
    --button-color: black;
    --button-margin: auto 3px;
    padding: 2px 0;
  }
</style>
