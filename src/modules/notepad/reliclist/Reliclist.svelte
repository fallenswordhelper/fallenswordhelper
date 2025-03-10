<script>
  import sendEvent from '../../analytics/sendEvent';
  import reliclist from '../../app/guild/reliclist';
  import alpha from '../../common/alpha';
  import isArray from '../../common/isArray';
  import LinkBtn from '../../common/LinkBtn.svelte';
  import splitTime from '../../common/splitTime';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import { defSubcmd, guideUrl, guildViewUrl } from '../../support/constants';
  import padZ from '../../system/padZ';

  let { visible = $bindable(true) } = $props();
  let listOfRelics = $state([]);
  let log = $state([]);
  let sortDirection = -1;
  let lastSort = '';

  function relicEvent(type) {
    sendEvent('Relic List', type);
  }

  function close() {
    relicEvent('close');
    visible = false;
  }

  function addToProgressLog(ary) {
    log = ary.concat(log);
  }

  const attrib = (id) => (att) => att.id === id;
  const getAttr = (relic, id) => relic?.attributes?.find(attrib(id));
  const getAttrStr = (relic, id) => getAttr(relic, id)?.value ?? '';
  const stamGain = (relic) => getAttr(relic, 6);
  const timeSort = (a, b) => sortDirection * (a.time - b.time);
  const getAttrNum = (relic, id) => getAttr(relic, id)?.value ?? 0;
  const attrSort = (id) => (a, b) =>
    sortDirection * (getAttrNum(a, id) - getAttrNum(b, id));
  const guildSort = (a, b) =>
    sortDirection * alpha(a.guild?.name ?? '', b.guild?.name ?? '');
  const nameSort = (a, b) => sortDirection * alpha(a.name, b.name);
  const level = (relic) => relic.location.realm.min_level;
  const levelSort = (a, b) => sortDirection * (level(a) - level(b));

  function doSort(event, sortFn) {
    sortDirection = lastSort === event ? sortDirection * -1 : 1;
    listOfRelics = listOfRelics.slice().sort(sortFn);
    lastSort = event;
  }

  function sortWrapper(event, sortFn) {
    relicEvent(event);
    doSort(event, sortFn);
  }

  async function getRelicList(offset = 0, limit = 100) {
    addToProgressLog([`offset ${offset}`]);
    const thisChunk = await reliclist(null, offset, limit);
    if (!thisChunk?.s) return;
    if (thisChunk.r.remaining_relics) {
      return thisChunk.r.relics.concat(
        await getRelicList(
          offset + thisChunk.r.relics.length,
          Math.min(100, thisChunk.r.remaining_relics),
        ),
      );
    }
    return thisChunk.r.relics;
  }

  async function init() {
    addToProgressLog(['Loading...']);
    const relics = await getRelicList();
    if (isArray(relics)) {
      listOfRelics = relics.filter(stamGain);
      doSort('sort by level', levelSort);
    }
  }

  function formatTime(time) {
    const [day, hour, min, sec] = splitTime(time);
    return `${day}d ${padZ(hour)}h ${padZ(min)}m ${padZ(sec)}s`;
  }

  let prm = $state(Promise.resolve());

  (() => {
    prm = init();
  })();
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Relic List
  {/snippet}
  {#await prm}
    <div class="content">
      {#each log as txt, index (index)}
        {txt}
        <br />
      {/each}
    </div>
  {:then}
    <div class="content grid">
      <div class="innerColumnHeader">
        <LinkBtn
          onclick={() => {
            sortWrapper('sort by level', levelSort);
          }}
        >
          Level
        </LinkBtn>
      </div>
      <div class="innerColumnHeader">
        <LinkBtn
          onclick={() => {
            sortWrapper('sort by name', nameSort);
          }}
        >
          Name
        </LinkBtn>
      </div>
      <div class="innerColumnHeader">
        <LinkBtn
          onclick={() => {
            sortWrapper('sort by guild', guildSort);
          }}
        >
          Guild
        </LinkBtn>
      </div>
      <div class="innerColumnHeader">
        <LinkBtn
          onclick={() => {
            sortWrapper('sort by stam gain', attrSort(6));
          }}
        >
          Stam Gain
        </LinkBtn>
      </div>
      <div class="innerColumnHeader">
        <LinkBtn
          onclick={() => {
            sortWrapper('sort by attack', attrSort(0));
          }}
        >
          Atk
        </LinkBtn>
      </div>
      <div class="innerColumnHeader">
        <LinkBtn
          onclick={() => {
            sortWrapper('sort by damage', attrSort(4));
          }}
        >
          Dmg
        </LinkBtn>
      </div>
      <div class="innerColumnHeader">
        <LinkBtn
          onclick={() => {
            sortWrapper('sort by stamina', attrSort(5));
          }}
        >
          Stam
        </LinkBtn>
      </div>
      <div class="innerColumnHeader">
        <LinkBtn
          onclick={() => {
            sortWrapper('sort by gold gain', attrSort(7));
          }}
        >
          Gold Gain
        </LinkBtn>
      </div>
      <div class="innerColumnHeader">
        <LinkBtn
          onclick={() => {
            sortWrapper('sort by xp gain', attrSort(8));
          }}
        >
          XP Gain
        </LinkBtn>
      </div>
      <div class="innerColumnHeader">
        <LinkBtn
          onclick={() => {
            sortWrapper('sort by time', timeSort);
          }}
        >
          Time
        </LinkBtn>
      </div>
      {#each listOfRelics as relic}
        <div>{relic.location.realm.min_level}</div>
        <div>
          <a
            href="{guideUrl}relics{defSubcmd}view&relic_id={relic.id}"
            onclick={() => relicEvent('view relic on UFSG')}
          >
            {relic.name}
          </a>
        </div>
        <div>
          {#if relic.guild}
            <a
              href="{guildViewUrl}{relic.guild.id}"
              onclick={() => relicEvent('view guild')}
            >
              {relic.guild.name}
            </a>
          {/if}
        </div>
        <div>{getAttrStr(relic, 6)}</div>
        <div>{getAttrStr(relic, 0)}</div>
        <div>{getAttrStr(relic, 4)}</div>
        <div>{getAttrStr(relic, 5)}</div>
        <div>{getAttrStr(relic, 7)}</div>
        <div>{getAttrStr(relic, 8)}</div>
        <div>
          {#if relic.time}
            {formatTime(relic.time)}
          {/if}
        </div>
      {/each}
    </div>
  {:catch error}
    <div class="content">{error.message}</div>
  {/await}
</ModalTitled>

<style>
  .content {
    --button-color: #383838;
    font-size: 12px;
    width: 630px;
  }
  .grid {
    display: grid;
    grid-template-columns: 40px auto auto 38px 30px 36px 40px 36px 36px 112px;
  }
  .innerColumnHeader {
    width: auto;
  }
  .grid > div {
    align-items: center;
    border: 1px solid black;
    display: flex;
    padding: 5px;
  }
  .grid > div:not(:nth-child(-n + 10)) {
    margin-top: -1px;
  }
  .grid > div:not(:nth-child(10n - 9)) {
    margin-left: -1px;
  }
</style>
