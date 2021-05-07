<script>
  import { createEventDispatcher } from 'svelte';
  import getText from '../../common/getText';
  import sendEvent from '../../analytics/sendEvent';

  const dispatch = createEventDispatcher();
  export let folders;
  let folderId;

  const getFolderId = (folder) => folder.parentNode.href.match(/&folder_id=(-?\d+)/i)[1];
  const getFolderName = (folder) => getText(folder.parentNode.parentNode);

  function doMove() {
    sendEvent('dropitems', 'Move to Folder');
    dispatch('move', folderId);
  }
</script>

<tr>
  <td class="fshCenter">
    <span>Move selected items to:</span>
    <select bind:value={folderId} class="customselect">
      {#each folders as folder}
        <option value="{getFolderId(folder)}">{getFolderName(folder)}</option>
      {/each}
    </select>
    <span>&nbsp;</span>
    <button class="custombutton" on:click={doMove} type="button">Move</button>
  </td>
</tr>
