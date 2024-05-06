<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import draggable from '../../common/draggable';
  import getElementById from '../../common/getElementById';
  import jQueryPresent from '../../common/jQueryPresent';
  import getValue from '../../system/getValue';
  import MenuItems from './MenuItems.svelte';

  const isFixed = getValue('keepHelperMenuOnScreen');
  const isDraggable = getValue('draggableHelperMenu');
  const isNewWorld = jQueryPresent() && getElementById('worldPage') && window.GameData;
  let thisHelperMenu = 0;

  onMount(() => {
    if (isDraggable) draggable(thisHelperMenu);
  });

  let showMenu = false;
  function doToggle() {
    showMenu = !showMenu;
  }
</script>
<div bind:this={ thisHelperMenu } class="helper-menu" class:helper-menu-fixed={ isFixed }>
  <button
    class:helper-menu-move={ isDraggable }
    type="button"
    class="toggle"
    on:click={ doToggle }>
    Helper Menu
  </button>
  { #if showMenu && isNewWorld }
    <div class="modal">
      <MenuItems on:toggle={ doToggle } />
    </div>
  { :else if showMenu }
    <div class="modal" transition:fade={ { duration: 100 } }>
      <MenuItems on:toggle={ doToggle } />
    </div>
  { /if }
</div>
<style>
.helper-menu {
  left: 0;
  position: absolute;
  top: 0;
  z-index: 40;
}
.helper-menu-fixed {
  position: fixed;
}
.toggle {
  background: none;
  border: none;
  color: yellow;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  white-space: nowrap;
}
.helper-menu-move {
  cursor: move;
}
.modal {
  background-color: #e6c270;
  border: 3px solid #ccbb77;
  border-radius: 5px;
  color: black;
  cursor: default;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
}
</style>
