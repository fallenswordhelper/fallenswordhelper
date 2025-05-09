<script>
import sendEvent from '../../analytics/sendEvent';
import Modal from '../../modal/Modal.svelte';
import daBuffMarketDoAdd from '../../_dataAccess/daBuffMarketDoAdd';

export let buffList;
let visible = true;

export function show() { visible = true; }
let close = () => {
  errorMessage = '';
  visible = false;
};

let gold_cost;
let point_cost;
let casts;
let selectedBuffs = [];

let processing = false;
let errorMessage;

function addPkg(buff) {
  let buffPkgData = {
    gold_cost,
    point_cost,
    casts,
    package_name: buff.name,
    buff_type_0: buff.value,
    buff_level_0: buff.max_level,
  };
  console.log(buffPkgData);
  return daBuffMarketDoAdd(buffPkgData);
}

async function serialiseRequests(prev, buff) {
  const prevData = await prev;
  if (!prevData || prevData.s === true) {
    const data = await addPkg(buff);
    if (!data?.s) errorMessage = data?.e?.message ?? 'Server Error';
    return data;
  }
  return prevData;
}

async function submit() {
  processing = true;
  errorMessage = '';
  sendEvent('buffmarket', 'bulkadd');
  const response = await selectedBuffs
    .map((buffIndex) => buffList[buffIndex])
    .reduce(serialiseRequests, Promise.resolve());
  if (response?.s) {
    window.location.replace('https://www.fallensword.com/index.php?cmd=buffmarket&subcmd=manage&m=1');
  } else {
    processing = false;
  }
}

</script>
<Modal {close} {visible}>
  <p class="fshBold">Create Bulk Buff Pacakges</p>
  <p>Individual buff packages will be made for each selected skill using the same cost and number of casts.</p>
  <div id="input-table">
    <label for="gold-cost">Gold Cost</label>
    <input
      type="text"
      name="gold-cost"
      id="gold-cost"
      bind:value={gold_cost}>
    <label for="point-cost">Fallen Sword Point Cost</label>
    <input
      type="text"
      name="point-cost"
      id="point-cost"
      bind:value={point_cost}>
    <label for="casts">Casts</label>
    <input
      type="text"
      name="casts"
      id="casts"
      bind:value={casts}>
  </div>
  <p>Selected buffs will be cast at their respective max levels.</p>
  <div style="columns: 4">
  {#each buffList as buff, index (buff.value)}
    <div class="buff">
      <label>
        <input
          type="checkbox"
          value={index}
          bind:group={selectedBuffs}>
        <img src='https://cdn2.fallensword.com/skills/{buff.value}.png' width=25 height=25 alt={buff.name}>
        <span>{buff.name}</span>
      </label>
    </div>
  {/each}
  </div>
  {#if processing}
  <div id="spinner"></div>
  {:else}
  <div id="button-div">
    <input type="button" class="awesome green" value="Create Buff Packages" style="color: black;" on:click={submit}>
    <input type="button" value="Cancel" on:click={close}>
  </div>
  {/if}
  {#if errorMessage}
  <div id="error-message">{errorMessage}</div>
  {/if}
</Modal>

<style>
#input-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 360px;
  margin: 0px auto;
}
#input-table label {
  background: rgb(205,158,75);
}
#input-table label, #input-table input {
  margin: 1px;
}
#error-message {
  background: #D3CFC1;
  border: solid 2px white;
  text-align: center;
  margin: 1em;
  padding: 1em;
}
#button-div {
  text-align: center;
  margin: 1em 0em;
}
input[type=text] {
  background: white;
}
p {
  margin: 1em 0em 0.5em 0em;
}
#spinner {
  display: block;
  width: 1.5em;
  height: 1.5em;
  margin: 1em auto;
  border: 2px solid black;
  border-radius: 100%;
  border-left-color: transparent;
  animation: fshSpinner 0.6s linear infinite;
}
.buff {
  margin-bottom: 0.5em;
}
.buff * {
  vertical-align: middle;
}
</style>
