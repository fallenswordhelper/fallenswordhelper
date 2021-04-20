<script>
  import callApp from '../app/callApp';
  import dialogMsg from '../common/dialogMsg';
  import indexAjax from '../ajax/indexAjax';
  import { oldActionSpinner } from '../support/constants';

  const settings = { cmd: 'settings', subcmd: 'save', tab: '0' };
  $: ladderStatus = settings.pvp_ladder === 1;

  async function updateSettings(jsonResponse) {
    if (jsonResponse === undefined) {
      dialogMsg('Unable to reach Fallen Sword servers.');
    } else if (jsonResponse.s === false) {
      dialogMsg(`An error occured: ${jsonResponse.e.message}`);
    } else {
      settings.min_group_level = jsonResponse.r.min_group_join_level;
      settings.ca_default = jsonResponse.r.skills[0].level;
      settings.sc_default = jsonResponse.r.skills[1].level;
      settings.nv_default = jsonResponse.r.skills[2].level;
      settings.barricade_default = jsonResponse.r.skills[3].level;
      settings.pvp_ladder = jsonResponse.r.flags[0] ? 1 : 0;
    }
  }
  async function getSettings() {
    await callApp({ cmd: 'settings' }).then(updateSettings);
  }
  
  let promise = getSettings();

  function toggleLadder() {
    promise = indexAjax({
      cache: false,
      data: {
        ...settings,
        pvp_ladder: ladderStatus ? 0 : 1,
      },
    }).then(getSettings);
  }
</script>
<tr>
  {#if Object.prototype.hasOwnProperty.call(settings, 'pvp_ladder')}
  <td height="25">
    You are currently {ladderStatus ? 'on' : 'off'} the ladder.
  </td>
  <td align="right">
    {#await promise}
    <img src={oldActionSpinner} alt="loading" />
    {:then}
    <button type="button" class="custombutton" on:click={toggleLadder}>
      Opt-{ladderStatus ? 'out' : 'in'}
    </button>
    {/await}
  </td>
  {/if}
</tr>
