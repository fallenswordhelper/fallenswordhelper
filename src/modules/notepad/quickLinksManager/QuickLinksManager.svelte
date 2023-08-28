<script>
  import sendEvent from '../../analytics/sendEvent';
  import getValueJSON from '../../system/getValueJSON';
  import setValueJSON from '../../system/setValueJSON';

  let nameCtrl = 0;
  let nameMissing = 0;
  let urlCtrl = 0;
  let urlMissing = 0;
  let newCtrl = 0;

  let currentItems = getValueJSON('quickLinks') || [];

  function saveCurrent() {
    setValueJSON('quickLinks', currentItems);
  }

  function delBtn(i) {
    sendEvent('Quick Links Manager', 'Delete Item');
    currentItems = currentItems.toSpliced(i, 1);
    saveCurrent();
  }

  function addBtn() {
    sendEvent('Quick Links Manager', 'Add Item');
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
  <div class="grid headings">
    <div>Name</div>
    <div>URL</div>
    <div class="centered">
      New
      <div class="wrapper">
        [
        <div class="tooltip">
          <span class="tooltip-bottom-right" data-tooltip="Open page in a new window/tab">?</span>
        </div>
        ]
      </div>
    </div>
    <div class="centered">Action</div>
  </div>
  <div class="grid items">
    { #each currentItems as { name, newWindow, url }, i }
      <div>{ name }</div>
      <div>{ url }</div>
      <div class="centered">
        <input bind:checked={ newWindow } disabled type="checkbox">
      </div>
      <div class="buttons centered">
        [
        <button on:click={ () => delBtn(i) } type="button">Del</button>
        ]
      </div>
    { /each }
  </div>
  <div class="grid add">
    <div>
      <input
        bind:this={ nameCtrl }
        class:invalid={ nameMissing }
        on:blur={ () => { nameMissing = nameCtrl.validity.valueMissing; } }
        on:focus={ () => { nameMissing = 0; } }
        placeholder="Log"
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
        placeholder="?cmd=log"
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
    width: 640px;
  }
  .grid {
    align-items: center;
    column-gap: 2px;
    display: grid;
    grid-template-columns: 128px 1fr 48px 40px;
    row-gap: 2px;
  }
  .headings {
    background-color: #CD9E4B;
    user-select: none;
  }
  .headings div {
    white-space: nowrap;
  }
  .centered {
    justify-self: center;
  }
  .wrapper {
    display: inline-block;
    word-spacing: -0.3ch;
  }
  .tooltip {
    border-bottom: 1px dotted black;
    display: inline-block;
    position: relative;
  }
  .buttons {
    color: blue;
    font-size: 10px;
    user-select: none;
    word-spacing: -0.2ch;
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
  .items > div {
    word-break: break-all;
  }
</style>
