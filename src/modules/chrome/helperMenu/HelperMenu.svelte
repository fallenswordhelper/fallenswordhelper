<script>
  import { onMount } from 'svelte';
  import draggable from '../../common/draggable';
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
          { #if menuItem.type === 'button' }
            <button type="button" on:click={ () => menuItem.caller(menuItem.label, menuItem.f) }>
              { menuItem.label }
            </button>
          { :else if menuItem.type === 'link' }
            <a href={ menuItem.href }>{ menuItem.label }</a>
          { /if }
          { #if Object.prototype.hasOwnProperty.call(menuItem, 'beta') && menuItem.beta }<sup class="fshRed">beta</sup>{ /if }
        </li>
      { /each }
      </ul>
    { /each }
    <h2>FSH developer quick links</h2>
    <ul>
      <li>
        <button type="button" class="helperDevBtn" onclick="openQuickMsgDialog('Lusterless');">
          PM
        </button>
        <a href="{ playerIdUrl }1963510">PointyHair</a></li>
      <li>
        <button type="button" class="helperDevBtn" onclick="openQuickMsgDialog('Lusterless');">
          PM
        </button>
        <a href="{ playerIdUrl }1674838">Lusterless</a></li>
    </ul>
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
