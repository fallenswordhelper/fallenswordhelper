<script>
  import sendEvent from '../../analytics/sendEvent';
  import { ahSearchUrl } from '../../support/constants';
  import getValueJSON from '../../system/getValueJSON';
  import setValueJSON from '../../system/setValueJSON';

  let catCtrl = 0;
  let catMissing = 0;
  let nameCtrl = 0;
  let nameMissing = 0;
  let urlCtrl = 0;
  let urlMissing = 0;
  let newCtrl = 0;

  let currentItems = getValueJSON('quickSearchList') || [];

  function saveCurrent() {
    setValueJSON('quickLinks', currentItems);
  }

  function delBtn(i) {
    sendEvent('AH Quick Search', 'Delete Item');
    currentItems = currentItems.toSpliced(i, 1);
    saveCurrent();
  }

  function addBtn() {
    sendEvent('AH Quick Search', 'Add Item');
    if (nameMissing || urlMissing) return;
    currentItems = [...currentItems, {
      name: nameCtrl.value,
      url: urlCtrl.value,
      newWindow: newCtrl.checked,
    }];
    nameCtrl.value = '';
    urlCtrl.value = '';
    newCtrl.checked = 0;
    saveCurrent();
  }
</script>

<div class="container">
  This screen allows you to set up some quick search templates for the Auction House. The Display
  on AH column indicates if the quick search will show on the short list on the Auction House main
  screen. A maximum of 36 items can show on this list (It will not show more than 36 even if you
  have more than 36 flagged). To edit items, either use the large text area below, or add a new
  entry and delete the old one. You can always reset the list to the default values.
  <div class="grid headings">
    <div>Category</div>
    <div>Nickname</div>
    <div>Quick Search Text</div>
    <div class="centered">Display in AH?</div>
    <div class="centered">Action</div>
  </div>
  <div class="grid">
    { #each currentItems as {
      category, displayOnAH, nickname, searchname,
    }, i }
      <div>{ category }</div>
      <div>{ nickname }</div>
      <div>
        <a href="{ ahSearchUrl }{ searchname }">{ searchname }</a>
      </div>
      <div class="centered">
        <input bind:checked={ displayOnAH } disabled type="checkbox">
      </div>
      <div class="buttons centered">
        [
        <button on:click={ () => delBtn(i) } type="button">Del</button>
        ]
      </div>
    { /each }
  </div>
  <div class="grid">
    <div>
      <input
        bind:this={ catCtrl }
        class:invalid={ catMissing }
        on:blur={ () => { catMissing = nameCtrl.validity.valueMissing; } }
        on:focus={ () => { catMissing = 0; } }
        placeholder="Potions"
        required
        type="text"
      >
    </div>
    <div>
      <input
        bind:this={ nameCtrl }
        class:invalid={ nameMissing }
        on:blur={ () => { nameMissing = nameCtrl.validity.valueMissing; } }
        on:focus={ () => { nameMissing = 0; } }
        placeholder="DC225"
        required
        type="text"
      >
    </div>
    <div>
      <input
        bind:this={ urlCtrl }
        class:invalid={ urlMissing }
        on:blur={ () => { urlMissing = urlCtrl.validity.valueMissing; } }
        on:focus={ () => { urlMissing = 0; } }
        placeholder="Potion of Black Death"
        required
        type="text"
      >
    </div>
    <div class="centered"><input bind:this={ newCtrl } type="checkbox"></div>
    <div class="buttons centered">
      [
      <button on:click={ addBtn } type="button">Add</button>
      ]
    </div>
  </div>
</div>

<style>
  .container {
    color-scheme: light;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 552px;
  }
  .grid {
    align-items: center;
    column-gap: 2px;
    display: grid;
    grid-template-columns: 80px 166px 168px 90px 40px;
    row-gap: 2px;
  }
  .headings {
    background-color: #CD9E4B;
    user-select: none;
  }
  .headings div {
    white-space: nowrap;
  }
  .buttons {
    color: blue;
    font-size: 10px;
    user-select: none;
    word-spacing: -0.2ch;
  }
  .centered {
    justify-self: center;
  }
  button {
    background-color: transparent;
    border-width: 0;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    opacity: 1;
    padding: 0;
    transition: opacity 200ms;
  }
  button:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
  input[type="text"] {
    box-sizing: border-box;
    width: 100%;
  }
  input.invalid {
    box-shadow: 0 0 5px 1px red;
  }
  a {
    color: inherit;
  }
</style>
