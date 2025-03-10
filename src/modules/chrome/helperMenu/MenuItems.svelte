<script>
  import sendEvent from '../../analytics/sendEvent';
  import isFunction from '../../common/isFunction';
  import { playerIdUrl } from '../../support/constants';
  import functionLookup from './functionLookup';

  const { doToggle } = $props();

  function sendHelperEvent(name) {
    sendEvent('helperMenu', name);
  }

  function callMenuFunction(name, fn) {
    if (isFunction(fn)) {
      sendHelperEvent(name);
      doToggle();
      fn();
    }
  }

  function message(playerName) {
    sendHelperEvent('sendMsg');
    doToggle();
    window.openQuickMsgDialog(playerName);
  }
</script>

{#each functionLookup as menuSection}
  <h2>{menuSection.section}</h2>
  <ul>
    {#each menuSection.menu as menuItem}
      <li>
        {#if menuItem.fn}
          <button
            type="button"
            onclick={() => callMenuFunction(menuItem.label, menuItem.fn)}
          >
            {menuItem.label}
          </button>
        {:else if menuItem.href}
          <a
            href={menuItem.href}
            onclick={() => sendHelperEvent(menuItem.label)}
          >
            {menuItem.label}
          </a>
        {:else if menuItem.playerName}
          <button
            type="button"
            class="helperDevBtn"
            onclick={() => message(menuItem.playerName)}
          >
            PM
          </button>
          <a href="{playerIdUrl}menuItem.playerId">{menuItem.playerName}</a>
        {/if}
        {#if menuItem.beta}<sup class="fshRed">beta</sup>{/if}
      </li>
    {/each}
  </ul>
{/each}

<style>
  h2 {
    background: #e0e0e0;
    font-size: 13px;
    font-weight: bold;
    margin: 4px 0 2px 0;
    text-align: center;
  }
  button,
  a {
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
  button:hover,
  a:hover {
    opacity: 0.8;
  }
</style>
