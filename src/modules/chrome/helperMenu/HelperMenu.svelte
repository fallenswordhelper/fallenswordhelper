<script>
  import { onMount } from 'svelte';
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

  function callModalFunction(name, fn) {
    if (isFunction(fn)) {
      sendEvent('helperMenu', name);
      fn();
    }
  }
</script>
<div id="helperMenu"
  class="helperMenu"
  class:helperMenuFixed={ isFixed }
  class:helperMenuMove={ isDraggable }>
  <button type="button" id="toggle" on:click={ toggle }>Helper Menu</button>
  <div id="helperMenuDiv" class="helperMenuDiv" class:helperMenuShow={ showMenu }>
    { #each functionLookup as menuSection }
      <h2>{ menuSection.section }</h2>
      <ul>{ #each menuSection.menu as menuItem }
        <li>
          { #if menuItem.fn }
            <button type="button" on:click={ () => callModalFunction(menuItem.label, menuItem.fn) }>
              { menuItem.label }
            </button>
          { :else if menuItem.href }
            <a href={ menuItem.href } on:click={ () => sendEvent('helperMenu', menuItem.label) }>
              { menuItem.label }
            </a>
          { :else if menuItem.playerName }
            <button
              type="button"
              class="helperDevBtn"
              onclick="openQuickMsgDialog('{ menuItem.playerName }');">
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
</div>
<style>
.helperMenu {
  cursor: pointer;
  left: 0;
  position: absolute;
  top: 0;
  text-align: center;
  z-index: 75;
  white-space: nowrap;
}
#toggle {
  color: yellow;
  font-size: 13px;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  background: none;
  border: none;
}
.helperMenuDiv {
  background-color: #e6c270;
  border:3px solid #ccbb77;
  border-radius: 5px;
  color: black;
  cursor: default;
  font-size: 12px;
  opacity: 0;
  position: absolute;
  text-align: center;
  text-decoration: none;
  transition: opacity 100ms linear, visibility 0s linear 100ms;
  visibility: hidden;
}
.helperMenuShow {
  opacity: 1;
  transition: opacity 100ms linear, visibility 0s linear;
  visibility: visible;
}
.helperMenuFixed { position: fixed; }
.helperMenuMove #toggle { cursor: move; }
h2 {
  background: #e0e0e0;
  font: bold 13px Arial, Helvetica, sans-serif;
  margin: 4px 0 2px 0;
  text-align: center;
}
.helperMenuDiv button, .helperMenuDiv a {
  font-family: Helvetica, Arial;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-decoration: underline;
  user-select: text;
}
</style>
