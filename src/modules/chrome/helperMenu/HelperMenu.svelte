<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import sendEvent from '../../analytics/sendEvent';
  import draggable from '../../common/draggable';
  import isFunction from '../../common/isFunction';
  import querySelector from '../../common/querySelector';
  import { playerIdUrl } from '../../support/constants';
  import getValue from '../../system/getValue';
  import functionLookup from './functionLookup';

  const isFixed = getValue('keepHelperMenuOnScreen');
  const isDraggable = getValue('draggableHelperMenu');

  onMount(() => {
    if (isDraggable) draggable(querySelector('#helperMenu'));
  });

  let showMenu = false;
  function toggle() {
    showMenu = !showMenu;
  }

  function sendHelperEvent(name) {
    sendEvent('helperMenu', name);
  }

  function callMenuFunction(name, fn) {
    if (isFunction(fn)) {
      sendHelperEvent(name);
      toggle();
      fn();
    }
  }

  function message(playerName) {
    toggle();
    sendHelperEvent('sendMsg');
    // eslint-disable-next-line no-undef
    openQuickMsgDialog(playerName);
  }
</script>
<div id="helperMenu" class:helperMenuFixed={ isFixed }>
  <button
    class:helperMenuMove={ isDraggable }
    type="button"
    id="toggle"
    on:click={ toggle }>
    Helper Menu
  </button>
  { #if showMenu }
    <div id="modal" transition:fade={ { duration: 100 } }>
      { #each functionLookup as menuSection }
        <h2>{ menuSection.section }</h2>
        <ul>{ #each menuSection.menu as menuItem }
          <li>
            { #if menuItem.fn }
              <button
                type="button"
                on:click={ () => callMenuFunction(menuItem.label, menuItem.fn) }>
                { menuItem.label }
              </button>
            { :else if menuItem.href }
              <a href={ menuItem.href } on:click={ () => sendHelperEvent(menuItem.label) }>
                { menuItem.label }
              </a>
            { :else if menuItem.playerName }
              <button
                type="button"
                class="helperDevBtn"
                on:click={ () => message(menuItem.playerName) }>
                PM
              </button>
              <a href="{ playerIdUrl }menuItem.playerId">{ menuItem.playerName }</a>
            { /if }
            { #if menuItem.beta }<sup class="fshRed">beta</sup>{ /if }
          </li>
        { /each }
        </ul>
      { /each }
    </div>
  { /if }
</div>
<style>
#helperMenu {
  left: 0;
  position: absolute;
  top: 0;
  z-index: 40;
}
#helperMenu.helperMenuFixed { position: fixed; }
#toggle {
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
#toggle.helperMenuMove  { cursor: move; }
#modal {
  background-color: #e6c270;
  border: 3px solid #ccbb77;
  border-radius: 5px;
  color: black;
  cursor: default;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
}
#modal h2 {
  background: #e0e0e0;
  font-size: 13px;
  font-weight: bold;
  margin: 4px 0 2px 0;
  text-align: center;
}
#modal button, #modal a {
  background: transparent;
  border: none;
  color: black;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  opacity: 1;
  padding: 0;
  text-decoration: underline;
  transition: opacity 100ms;
  user-select: text;
}
#modal button:hover, #modal a:hover {
  opacity: 0.8;
}
</style>
