<script>
  import sendEvent from '../../analytics/sendEvent';
  import getApp from '../../app/getApp';

  let moldprm = $state(Promise.resolve(null));

  function handleMoldResponse(data) {
    const itemsMold = data.r.molds?.find(
      (mold) => mold.filename === 'item_groups.json',
    );
    if (!itemsMold) throw new Error('Failed to load mold data');
    const moldUrl = `${data.r.cdns[0]}${itemsMold.filename}`;
    window.open(moldUrl, '_blank');
    return null;
  }

  async function getMold() {
    const data = await getApp({ cmd: 'molds' });
    if (data?.s && data.r?.molds && data.r?.cdns?.length) {
      return handleMoldResponse(data);
    }
    throw new Error('Failed to load mold data');
  }

  function downloadItemsMold() {
    sendEvent('GS Export', 'Items Mold');
    moldprm = getMold();
  }
</script>

<div class="mold-link">
  {#await moldprm}
    <span>Loading mold data...</span>
  {:then}
    <button type="button" onclick={downloadItemsMold} class="mold-btn">
      Download Item Groups JSON
    </button>
  {:catch}
    <span class="error">Error loading mold data</span>
  {/await}
</div>

<style>
  .mold-link {
    margin-bottom: 16px;
  }

  .mold-btn {
    background-color: #fec84a;
    background-image: linear-gradient(#fedd8f, #fec94d);
    border: 1px solid #494437;
    border-radius: 4px;
    color: #494437;
    cursor: pointer;
    font-family: inherit;
    font-size: 12px;
    font-weight: bold;
    min-width: 120px;
    padding: 8px 16px;
  }

  .mold-btn:hover {
    background-image: linear-gradient(#fec94d, #fedd8f);
  }

  .error {
    color: #d32f2f;
    font-weight: bold;
  }
</style>
