<script>
  import currentGuildId from '../../common/currentGuildId';
  import download from '../../common/download';
  import sendEvent from '../../analytics/sendEvent';
  import guildStore from '../../_dataAccess/export/guildStore';

  let exportPromise = $state(Promise.resolve(null));
  let csvData = $state(null);
  let jsonData = $state(null);

  const header =
    'item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,' +
    'in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,' +
    'set_name\n';

  const mainFields = (item) => [
    item.item_id,
    item.inv_id,
    item.item_name,
    item.rarity,
    item.type,
    item.durability,
    item.max_durability,
    item.guild_tag,
    String(!!item.in_guide),
    item.player_id,
    item.equipped,
    item.craft,
    item.forge,
  ];

  const statFields = (stats) => [
    stats?.attack ?? '',
    stats?.defense ?? '',
    stats?.armor ?? '',
    stats?.hp ?? '',
    stats?.damage ?? '',
    stats?.stamina ?? '',
    stats?.min_level ?? '',
    stats?.set_name ?? '',
  ];

  const fields = (item) =>
    [...mainFields(item), ...statFields(item.stats)].join(',');

  const toCsv = (items) => items.map(fields).join('\n');
  const csvBlob = (csv) => new Blob([csv], { type: 'text/csv' });

  async function getExport() {
    const json = await guildStore();
    if (!json?.items?.length) throw new Error('Invalid export data');
    const items = json.items;
    jsonData = json;
    csvData = `${header}${toCsv(items)}\n`;
    return null;
  }

  function generateExport() {
    if (!currentGuildId()) return;
    sendEvent('GS Export', 'Generate');
    exportPromise = getExport();
  }

  function downloadExport() {
    if (!csvData) return;
    sendEvent('GS Export', 'Download');
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace(/[:.]/g, '-');
    const filename = `gs_export_${timestamp}.csv`;
    download(csvBlob(csvData), filename);
  }

  function downloadJson() {
    if (!jsonData) return;
    sendEvent('GS Export', 'Download JSON');
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace(/[:.]/g, '-');
    const filename = `gs_export_${timestamp}.json`;
    const jsonBlob = new Blob([JSON.stringify(jsonData, null, 2)], {
      type: 'application/json',
    });
    download(jsonBlob, filename);
  }
</script>

{#if !currentGuildId()}
  <p class="error">You must be in a guild to use this feature.</p>
{:else}
  {#await exportPromise}
    <button type="button" disabled> Generating Export... </button>
    <div class="progress">
      <p>Loading guild store inventory...</p>
      <div class="spinner"></div>
    </div>
  {:then}
    {#if csvData}
      <div class="export-ready">
        <p class="success">
          Export ready! Click the button below to download your file.
        </p>
        <button type="button" onclick={downloadExport}> Download CSV </button>
        <button type="button" onclick={downloadJson}> Download JSON </button>
      </div>
    {:else}
      <button type="button" onclick={generateExport}> Generate Export </button>
    {/if}
  {:catch}
    <p class="error">Failed to generate export.</p>
  {/await}
{/if}

<style>
  .error {
    color: #d32f2f;
    font-weight: bold;
  }

  .success {
    color: #2e7d32;
    font-weight: bold;
  }

  .export-ready {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  button {
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

  button:hover {
    background-image: linear-gradient(#fec94d, #fedd8f);
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .progress {
    margin-top: 16px;
    text-align: center;
  }

  .progress p {
    font-size: 12px;
    margin: 4px 0;
  }

  .spinner {
    border: 3px solid #e0e0e0;
    border-top: 3px solid #4caf50;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
    margin: 8px auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
