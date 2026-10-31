<script>
  let { folders, moveItemsToFolder } = $props();
  let folderId = $state();

  function doMove() {
    moveItemsToFolder(folderId);
  }
</script>

<tr>
  <td class="fshCenter">
    <span>Move selected items to:</span>
    <select bind:value={folderId} class="customselect">
      {#each folders as folder (folder.id)}
        <option value={folder.id}>{folder.name}</option>
      {/each}
    </select>
    <span>&nbsp;</span>
    <button class="custombutton" onclick={doMove} type="button">Move</button>
  </td>
</tr>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
  }
</style>
