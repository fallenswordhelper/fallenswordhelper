<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let folders;
  let folderId;

  function doMove() {
    dispatch('move', folderId);
  }
</script>

<tr>
  <td class="fshCenter">
    <span>Move selected items to:</span>
    <select bind:value={folderId} class="customselect">
      {#each folders as folder}
        <option value="{folder.id}">{folder.name}</option>
      {/each}
    </select>
    <span>&nbsp;</span>
    <button class="custombutton" on:click={doMove} type="button">Move</button>
  </td>
</tr>
