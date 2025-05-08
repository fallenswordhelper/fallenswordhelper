<script>
  import daBuffMarketDoAdd from '../_dataAccess/daBuffMarketDoAdd';
  import daBuffMarketManage from '../_dataAccess/daBuffMarketManage';
  import Modal from '../modal/Modal.svelte';
  import makeBuffPackageJson from './makeBuffPackageJson';

  export let visible = true;
  export const show = () => { visible = true; };
  const close = () => { visible = false; };

  let castsInput = 250;
  let errorMsg;
  let processing = false;

  function resetCasts(buffPkg) {
    const pkgJson = makeBuffPackageJson({
      ...buffPkg,
      casts: castsInput,
    });
    return daBuffMarketDoAdd(pkgJson);
  }

  async function submit() {
    errorMsg = '';
    const value = Number(castsInput);
    if (Number.isNaN(value) || value < 1 || value > 250) {
      errorMsg = 'You must enter a number between 1 and 250';
      return;
    }
    processing = true;
    const marketResponse = await daBuffMarketManage();
    if (!marketResponse) {
      errorMsg = 'Something went wrong. Please refresh and try again.';
      processing = false;
      return;
    }
    if (!marketResponse.s) {
      errorMsg = marketResponse.e.messge
        ?? 'Something went wrong. Please refresh and try again.';
      processing = false;
      return;
    }
    marketResponse.r.reduce(async (prev, buffPkg) => {
      const prevResponse = await prev;
      if (prevResponse.s === true) {
        const response = await resetCasts(buffPkg);
        if (!response?.s) {
          errorMsg = response?.e?.message
            ?? 'Somethign went wrong. Please refresh and try again.';
        }
        return response;
      }
      return prevResponse;
    }, Promise.resolve({ s: true }))
      .then((resetResponse) => {
        if (!resetResponse.s) {
          errorMsg = resetResponse.e.message
            ?? 'Something went wrong. Please refresh and try again.';
          processing = false;
        } else {
          window.location.reload();
        }
      });
  }
</script>

<Modal { visible } >
  <div style="width: 240px; margin: 6px;">
    <label>
      Reset buff package casts to:
      <input
        type="text"
        name="reset-casts"
        bind:value={ castsInput }>
    </label>
    { #if processing }
      <div class="spinner"></div>
    { :else }
      <input type="button" value="Reset Casts" on:click={ submit }>
      <input type="button" value="Cancel" on:click={ close }>
    { /if }
    { #if errorMsg }
      <div>{ errorMsg }</div>
    { /if }
  </div>
</Modal>
<style>
input[type=text] {
  width: 36px;
  background: white;
}
div.spinner {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 2px solid black;
  border-left-color: transparent;
  animation: fshSpinner .6s linear infinite;
  margin: 6px auto;
}
</style>
