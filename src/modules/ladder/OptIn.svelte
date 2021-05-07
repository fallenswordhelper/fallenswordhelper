<script>
  import daLadderStatus from '../_dataAccess/daLadderStatus';
  import daToggleLadder from '../_dataAccess/daToggleLadder';
  import dialogMsg from '../common/dialogMsg';
  import getValue from '../system/getValue';
  import { oldActionSpinner } from '../support/constants';

  let ladderStatus;
  let promise = daLadderStatus().then((response) => {
    if (response === undefined) {
      dialogMsg('Could not connect to FS servers.');
    } else if (response.s === false) {
      dialogMsg(`An error occured: ${response.e.message}`);
    } else {
      ladderStatus = response;
    }
  });

  function toggleLadder() {
    promise = daToggleLadder(!ladderStatus).then((response) => {
      if (response === undefined) {
        dialogMsg('Could not connect to FS servers.');
      } else if (response.s === false) {
        dialogMsg(`An error occured: ${response.e.message}`);
      } else {
        ladderStatus = !ladderStatus;
      }
    });
  }
</script>
<tr>
  {#if getValue('trackLadderReset')}
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
