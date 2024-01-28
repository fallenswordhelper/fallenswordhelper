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
  if (calf.enableMaxGroupSizeToJoin) {
    groupJoinUrl = joinUnderUrl;
    groupJoinText = ` less than size ${calf.maxGroupSizeToJoin}`;
  }

  async function processGroups(json) {
    const openGroups = json.r.filter(smallEnough).filter(isOpen).map(getId);
    if (openGroups.length) {
      await daJoinAll(openGroups);
    }
  }

  async function doJoinAll() {
    const json = await daViewGroups();
    if (json?.s) {
      await processGroups(json);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    sendEvent('notification', 'Join All');
    joining = 1;
  }
</script>

<a href={ groupJoinUrl }>
  <span id="notification-icon-guild-group" class="notification-icon"></span>
  { #if joining }
    { #await doJoinAll() }
      <span class="notification-content fshSpinner fshRelative"></span>
    { :then}
      <p class="notification-content" style="line-height: 32px;">Joined.</p>
    { /await }
  { :else }
    <button
      class="notification-content"
      on:click|once={ handleClick }
      type="button"
    >
      Join all attack groups{ groupJoinText }.
    </button>
  { /if }
</a>

<style>
  button {
    border: none;
    box-sizing: content-box;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
  }
</style>
