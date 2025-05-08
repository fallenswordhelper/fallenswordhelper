<script>
  import sendEvent from '../../../analytics/sendEvent';
  import clickThis from '../../../common/clickThis';
  import querySelectorArray from '../../../common/querySelectorArray';

  const BpFromGs = 'span[action="take"]';
  const BpFromPlayer = 'span[mode="0"][action="recall"]';
  const GsFromPlayer = 'span[mode="1"][action="recall"]';

  const recallEvent = (type) => { sendEvent('Inventory', 'Recall All', type); };

  function toBp() {
    recallEvent('toBp');
    [
      ...querySelectorArray(BpFromGs),
      ...querySelectorArray(BpFromPlayer),
    ].forEach(clickThis);
  }

  function toGs() {
    recallEvent('toGs');
    querySelectorArray(GsFromPlayer).forEach(clickThis);
  }
</script>

<div class="main">
  <div class="head">Recall all visible to</div>
  <div class="btnbox">
    <button class="custombutton" on:click={ toBp } type="button">BP</button>
    <button class="custombutton" on:click={ toGs } type="button">GS</button>
  </div>
</div>

<style>
  .main {
    border-color: #333;
    border-radius: 12px;
    border-style: solid;
    border-width: 4px;
    padding: 8px;
    text-align: center;
  }
  .head {
    font-weight: bold;
    padding: 4px;
  }
  .btnbox {
    padding: 4px;
  }
  button {
    font-family: inherit;
    font-size: inherit;
  }
</style>
