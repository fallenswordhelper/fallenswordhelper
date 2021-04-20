<script>
  import callApp from '../app/callApp';
  import dialogMsg from '../common/dialogMsg';
  import indexAjax from '../ajax/indexAjax';

  const settings = { cmd: 'settings', subcmd: 'save', tab: '0' };
  $: ladderStatus = settings.pvp_ladder === 1;

  function updateSettings(jsonResponse) {
    if (jsonResponse === undefined) {
      dialogMsg('Unable to reach Fallen Sword servers.');
    } else if (jsonResponse.s === false) {
      dialogMsg(`An error occured: ${jsonResponse.e.message}`);
    } else if (Object.prototype.hasOwnProperty.call(settings, 'pvp_ladder')
        && jsonResponse.r.flags[0] !== (settings.pvp_ladder === 1)) {
      dialogMsg('Unable to reach Fallen Sword servers.');
    } else {
      settings.min_group_level = jsonResponse.r.min_group_join_level;
      settings.ca_default = jsonResponse.r.skills[0].level;
      settings.sc_default = jsonResponse.r.skills[1].level;
      settings.nv_default = jsonResponse.r.skills[2].level;
      settings.barricade_default = jsonResponse.r.skills[3].level;
      settings.pvp_ladder = jsonResponse.r.flags[0] ? 1 : 0;
    }
  }
  function getSettings() {
    callApp({ cmd: 'settings' }).then(updateSettings);
  }
  function sendSettings() {
    indexAjax({
      cache: false,
      data: settings,
    }).then(getSettings);
  }
  function toggleLadder() {
    settings.pvp_ladder = settings.pvp_ladder === 1 ? 0 : 1;
    sendSettings();
  }

  getSettings();
</script>
<tr>
  {#if Object.prototype.hasOwnProperty.call(settings, 'pvp_ladder')}
  <td height="25">
    You are currently {ladderStatus ? 'on' : 'off'} the ladder.
  </td>
  <td align="right">
    <button type="button" class="custombutton" on:click={toggleLadder}>
      Opt-{ladderStatus ? 'out' : 'in'}
    </button>
  </td>
  {/if}
</tr>
