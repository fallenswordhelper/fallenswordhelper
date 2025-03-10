<script>
  import sendEvent from '../../analytics/sendEvent';
  import createDiv from '../../common/cElement/createDiv';
  import getText from '../../common/getText';
  import getTextTrim from '../../common/getTextTrim';
  import isString from '../../common/isString';
  import querySelector from '../../common/querySelector';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import { playerIdUrl } from '../../support/constants';
  import getCustomUrlParameter from '../../system/getCustomUrlParameter';
  import { get, set } from '../../system/idb';

  let { visible = $bindable(true) } = $props();
  let records = $state([]);

  function close() {
    sendEvent('FS Box Log', 'close');
    visible = false;
  }

  function breakUp(str) {
    const df = createDiv({ innerHTML: str });
    const anchor = querySelector('a', df);
    const playerid = Number(getCustomUrlParameter(anchor?.href, 'player_id'));
    const playername = getText(anchor);
    const quote = getTextTrim(querySelector('q', df));
    return [playerid, playername, quote];
  }

  const real = ([pid, pnm, qot]) => pid && isString(pnm) && isString(qot);

  async function init() {
    const txt = (await get('fsh_fsboxcontent')) ?? '';
    records = txt.split('<br>').map(breakUp).filter(real);
  }

  function clearStorage() {
    set('fsh_fsboxcontent', '');
    sendEvent('FS Box Log', 'clear storage');
    records = [];
  }
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    FS Box Log
  {/snippet}
  <div class="top">
    <button onclick={clearStorage} type="button">Clear</button>
  </div>
  <div class="textContainer">
    {#await init() then}
      {#each records as [playerid, playername, quote]}
        <br />
        <span>
          <a href="{playerIdUrl}{playerid}">
            {playername}
          </a>
          says:
        </span>
        <q>
          {quote}
        </q>
      {/each}
    {/await}
  </div>
</ModalTitled>

<style>
  div {
    width: 620px;
  }
  .top {
    text-align: center;
  }
  .textContainer {
    font-size: 11px;
    padding-left: 4px;
  }
  a {
    font-size: 10px;
  }
</style>
