<script>
import sendEvent from '../../analytics/sendEvent';
import accept from '../../app/guild/mercs/accept';
import decline from '../../app/guild/mercs/decline';
import disband from '../../app/guild/mercs/disband';
import search from '../../app/guild/mercs/search';
import view from '../../app/guild/mercs/view';
import ModalTitled from '../../modal/ModalTitled.svelte';
import { nowSecs } from '../../support/now';
import addCommas from '../../system/addCommas';

const creatureType = ['Normal', 'Champion', 'Elite', 'Super Elite', 'Titan', 'Legendary'];
const creatureClass = ['Human', 'Vermin', 'Undead', 'Dragon', 'Greenskin', 'Demon', 'Golem',
  'Dwarf', 'Feline', 'Elf', 'Avian', 'Aquatic', 'Plant', 'Canine', 'Reptile', 'Beast',
  'Mechanical', 'Mounted', 'Magical'];

export let visible = true;
let doingSomething = 1;
let haveOffer = 0;
let noOffer = 0;
let available = '?';
let cost = '?';
let active = [];

function close() {
  sendEvent('mercs', 'close');
  visible = false;
}

function noJoy() {
  haveOffer = 0;
  noOffer = 1;
  doingSomething = 0;
}

async function doDecline() {
  sendEvent('mercs', 'doDecline');
  doingSomething = 1;
  await decline();
  haveOffer = 0;
  doingSomething = 0;
}

function formatExpire(expires) {
  let mins = Math.floor((expires - nowSecs()) / 60);
  const hours = Math.floor(mins / 60);
  mins %= 60;
  return { hours, mins };
}

const calcExpiry = (m) => ({ ...m, ...formatExpire(m.expires) });

async function doAccept() {
  sendEvent('mercs', 'doAccept');
  doingSomething = 1;
  const json = await accept();
  active = [...active, calcExpiry({ ...haveOffer, expires: json.r.expires })];
  available = json.r.mercs_available.toString();
  haveOffer = 0;
  doingSomething = 0;
}

function offer(json) {
  haveOffer = calcExpiry(json.r);
  doingSomething = 0;
}

async function getOffer() {
  sendEvent('mercs', 'getOffer');
  doingSomething = 1;
  noOffer = 0;
  const json = await search();
  if (!json.r) noJoy();
  else offer(json);
}

async function doDisband(mercId) {
  sendEvent('mercs', 'doDisband');
  doingSomething = 1;
  await disband(mercId);
  active = active.filter(({ id }) => id !== mercId);
  doingSomething = 0;
}

async function init() {
  const json = await view();
  active = json.r.mercs?.map(calcExpiry) || [];
  available = json.r.mercs_available.toString();
  cost = json.r.gold.toString();
  if (json.r.offer) offer({ r: json.r.offer });
  else doingSomething = 0;
}

init();
</script>

<ModalTitled { visible } on:close={close} title="Merc Hunter">
  <div class="merc-hunter">
    <div class="top-div">(<b>{available}</b> available for hire)</div>
    <div class="button-div">
      {#if !haveOffer}
        <button class="custombutton" disabled={doingSomething} on:click={getOffer} type="button">Send Expedition ({cost}g)</button>
      {:else}
        <button class="custombutton" disabled={doingSomething} on:click={doAccept} type="button">Accept Offer</button>
        &nbsp;
        <button class="custombutton" disabled={doingSomething} on:click={doDecline} type="button">Decline Offer</button>
      {/if}
    </div>
    <div class="result-div">
      <div class="cols">
        {#if haveOffer}
          <div class="merc">
            <div><b>{haveOffer.name}</b></div>
            <div>
              <img
                alt="alt"
                height="125"
                src="https://cdn2.fallensword.com/mercs/{haveOffer.id}.png"
                width="125"
              >
            </div>
            <div class="offer">
              <div>Hire Price:</div>
              <div>
                <b>{addCommas(haveOffer.gold)}</b>
                <img alt="Gold" class="gold" src="https://cdn2.fallensword.com/currency/0.png">
              </div>
              <div>Hire Time:</div><div><b>{haveOffer.hire_time / 3600}</b> hour(s)</div>
              <div>Offer Time Left:</div><div><b>{haveOffer.hours}</b> hour(s) <b>{haveOffer.mins}</b> min(s)</div>
            </div>
          </div>
          <div class="attribs">
            <div>Level:</div><div>{haveOffer.level}</div>
            <div>Classification:</div><div>{creatureClass[haveOffer.class]}</div>
            <div>Type:</div><div>{creatureType[haveOffer.type]}</div>
            <div>Attack:</div><div>{haveOffer.attributes[0].value}</div>
            <div>Defense:</div><div>{haveOffer.attributes[1].value}</div>
            <div>Armor:</div><div>{haveOffer.attributes[2].value}</div>
            <div>HP:</div><div>{haveOffer.attributes[3].value}</div>
            <div>Damage:</div><div>{haveOffer.attributes[4].value}</div>
          </div>
        {/if}
        {#if noOffer}
        <div class="no-offer">
          Your expedition returned without finding any mercenaries.
        </div>
        {/if}
        <div class="auto-decline"></div>
      </div>
    </div>
    <div class="active-title"><b>Active Mercenaries</b></div>
    <div class="lower-div">
      <div class="active">
        {#if active.length}
          {#each active as { attributes, class: className, id, level, name, type, hours, mins }}
            <div class="active-merc">
              <div><b>{name}</b></div>
              <div>
                <img
                  alt="alt"
                  class="tip-static"
                  data-tipped="<div style=&quot;column-gap: 2px; display: grid; grid-template-columns: repeat(2, 1fr);&quot;>
                      <div>Name:</div><div>{name}</div>
                      <div>Level:</div><div>{level}</div>
                      <div>Classification:</div><div>{creatureClass[className]}</div>
                      <div>Type:</div><div>{creatureType[type]}</div>
                      <div>Attack:</div><div>{attributes[0].value}</div>
                      <div>Defense:</div><div>{attributes[1].value}</div>
                      <div>Armor:</div><div>{attributes[2].value}</div>
                      <div>HP:</div><div>{attributes[3].value}</div>
                      <div>Damage:</div><div>{attributes[4].value}</div>
                    </div>"
                  height="125"
                  src="https://cdn2.fallensword.com/mercs/{id}.png"
                  width="125"
                >
              </div>
              <div>Time Remaining</div>
              <div><b>{hours}</b> hour(s) <b>{mins}</b> min(s)</div>
              <div class="disband">
                <button
                  class="custombutton"
                  disabled={doingSomething}
                  on:click={() => doDisband(id)}
                  type="button"
                >
                  Disband
                </button>
              </div>
            </div>
          {/each}
        {:else}
          <div class="no-active">
            [ no active mercenaries ]
          </div>
        {/if}
      </div>
    </div>
  </div>
</ModalTitled>

<style>
  .merc-hunter {
    font-size: 12px;
  }
  .top-div {
    font-size: smaller;
    height: 16px;
  }
  .button-div, .active-title {
    height: 28px;
  }
  .result-div, .lower-div {
    height: 200px;
  }
  .top-div, .button-div, .active-title {
    text-align: center;
  }
  .top-div, .button-div, .result-div, .lower-div {
    width: 640px;
  }
  button {
    font-size: inherit;
    font-weight: inherit;
  }
  .active, .cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  .merc, .active-merc {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .offer, .attribs {
    align-items: end;
    column-gap: 2px;
    display: grid;
    row-gap: 2px;
  }
  .offer {
    grid-template-columns: 84px 104px;
  }
  .offer div {
    white-space: nowrap;
  }
  .gold {
    vertical-align: text-bottom;
  }
  .attribs {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, min-content);
    padding-top: 12px;
  }
  .no-offer {
    grid-column-end: span 2;
  }
  .auto-decline {
    grid-column-start: 3;
  }
  .active-title {
    padding-top: 4px;
  }
  .disband {
    margin-top: 10px;
  }
  .no-active {
    grid-column-end: span 3;
  }
</style>
