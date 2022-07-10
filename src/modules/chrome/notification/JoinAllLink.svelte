<script>
  import daJoinAll from '../../_dataAccess/daJoinAll';
  import daViewGroups from '../../_dataAccess/daViewGroups';
  import sendEvent from '../../analytics/sendEvent';
  import playerName from '../../common/playerName';
  import calf from '../../support/calf';
  import { joinUnderUrl, joinallUrl } from '../../support/constants';

  const smallEnough = (g) => !calf.enableMaxGroupSizeToJoin
    || g.members.length < calf.maxGroupSizeToJoin;
  const hasPlayer = (m) => m.name === playerName();
  const isOpen = (g) => !g.members.find(hasPlayer);
  const getId = (g) => g.id;

  let joining = 0;

  let groupJoinUrl = joinallUrl;
  let groupJoinText = '';
  let groupStyleText = 'height: 24px; padding: 6px 2px 10px;';
  if (calf.enableMaxGroupSizeToJoin) {
    groupJoinUrl = joinUnderUrl;
    groupJoinText = ` less than size ${calf.maxGroupSizeToJoin}`;
    groupStyleText = 'height: 35px; padding: 3px 2px 2px;';
  }

  async function processGroups(json) {
    const openGroups = json.r.filter(smallEnough).filter(isOpen).map(getId);
    if (openGroups.length) {
      await daJoinAll(openGroups);
    }
  }

  async function doJoinAll() {
    const json = await daViewGroups();
    if (json.s) {
      await processGroups(json);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    sendEvent('notification', 'Join All');
    joining = 1;
  }
</script>

<li class="notification">
  <a href="{groupJoinUrl}">
    <span class="notification-icon"></span>
    {#if joining}
      {#await doJoinAll()}
        <span class="notification-content fshSpinner fshRelative"></span>'
      {:then}
        <p class="notification-content" style="line-height: 32px;">Joined.</p>
      {/await}
    {:else}
      <p class="notification-content" style="{groupStyleText}" on:click|once={handleClick}>Join all attack groups{groupJoinText}.</p>
    {/if}
  </a>
</li>

