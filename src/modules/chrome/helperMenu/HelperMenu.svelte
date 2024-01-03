<script>
  import { onMount } from 'svelte';
  import sendEvent from '../../analytics/sendEvent';
  import draggable from '../../common/draggable';
  import isFunction from '../../common/isFunction';
  import querySelector from '../../common/querySelector';
  import Modal from '../../modal/Modal.svelte';
  import { playerIdUrl } from '../../support/constants';
  import getValue from '../../system/getValue';
  import functionLookup from './functionLookup';

  const isFixed = getValue('keepHelperMenuOnScreen');
  const isDraggable = getValue('draggableHelperMenu');
  let helperPosition = { left: '0px', top: '16px' };

  onMount(() => {
    if (isDraggable) draggable(querySelector('#toggle'));
  });

  function updateOffset() {
    const css = querySelector('#toggle').style.transform;
    const matrix = css.substring(7, css.length - 1).split(', ');
    helperPosition = { left: `${matrix[4]}px`, top: `${Number(matrix[5]) + 16}px` };
  }

  let showMenu = false;
  function toggle() {
    updateOffset();
    showMenu = !showMenu;
  }

  function sendHelperEvent(name) {
    sendEvent('helperMenu', name);
  }

  function callModalFunction(name, fn) {
    if (isFunction(fn)) {
      sendHelperEvent(name);
      fn();
      toggle();
    }
  }
</script>
<button
  class:helperMenuFixed={ isFixed }
  class:helperMenuMove={ isDraggable }
  type="button"
  id="toggle"
  on:click={ toggle }>
  Helper Menu
</button>
<Modal
  visible={ showMenu }
  on:close={ toggle }
  left={ helperPosition.left }
  center={ false }
  top={ helperPosition.top }>
  <div id="helperMenu">
    { #each functionLookup as menuSection }
      <h2>{ menuSection.section }</h2>
      <ul>{ #each menuSection.menu as menuItem }
        <li>
          { #if menuItem.fn }
            <button type="button" on:click={ () => callModalFunction(menuItem.label, menuItem.fn) }>
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
              on:click={ () => { toggle(); sendHelperEvent('sendMsg'); } }
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
</Modal>
<style>
#toggle {
  background: none;
  border: none;
  color: yellow;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  white-space: nowrap;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 75;
}
#toggle.helperMenuFixed { position: fixed; }
#toggle.helperMenuMove  { cursor: move; }
#helperMenu {
  background-color: #e6c270;
  border: 3px solid #ccbb77;
  border-radius: 5px;
  color: black;
  cursor: default;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
}
#helperMenu h2 {
  background: #e0e0e0;
  font: bold 13px Arial, Helvetica, sans-serif;
  margin: 4px 0 2px 0;
  text-align: center;
}
#helperMenu button, #helperMenu a {
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
  color: black;
}
</style>
