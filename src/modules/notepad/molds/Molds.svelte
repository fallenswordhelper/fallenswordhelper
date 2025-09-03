<script>
  import sendEvent from '../../analytics/sendEvent';
  import getApp from '../../app/getApp';

  async function loadMolds() {
    sendEvent('Molds', 'Load');
    const data = await getApp({ cmd: 'molds' });
    if (data?.s && data.r?.molds && data.r?.cdns?.length) {
      return data;
    }
    throw new Error('Failed to load mold data');
  }

  function downloadMold(mold, baseUrl) {
    sendEvent('Molds', 'Download', mold.filename);
    window.open(`${baseUrl}${mold.filename}`, '_blank');
  }

  function formatFileSize(bytes) {
    if (bytes < 1024) {
      return `${bytes} B`;
    } else if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    } else {
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }
  }
</script>

<div class="molds">
  <h3>Available Molds</h3>
  <p>Download JSON data files used by App API.</p>

  {#await loadMolds()}
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading molds...</p>
    </div>
  {:then data}
    <div class="molds-grid">
      {#each data.r.molds as mold (mold.filename)}
        <div class="mold-item">
          <div class="mold-info">
            <h4>{mold.filename}</h4>
            <div class="mold-details">
              <span class="size">{formatFileSize(mold.size)}</span>
              <span class="version">v{mold.version}</span>
            </div>
          </div>
          <button
            type="button"
            onclick={() => downloadMold(mold, data.r.cdns[0])}
            class="download-btn"
          >
            Download
          </button>
        </div>
      {/each}
    </div>
  {:catch}
    <p class="error">Error loading molds</p>
  {/await}
</div>

<style>
  .molds {
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .molds h3 {
    margin: 0 0 8px 0;
    color: #494437;
    font-size: 16px;
  }

  .molds p {
    margin: 0 0 20px 0;
    font-size: 12px;
    color: #666;
  }

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }

  .loading p {
    margin-top: 12px;
    font-size: 12px;
  }

  .spinner {
    border: 3px solid #e0e0e0;
    border-top: 3px solid #4caf50;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .molds-grid {
    display: grid;
    gap: 12px;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 12px;
    min-height: 0;
  }

  .mold-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background-color: #f9f9f9;
    min-width: 0;
  }

  .mold-item:hover {
    background-color: #f0f0f0;
  }

  .mold-info {
    flex: 1;
    min-width: 0;
    margin-right: 12px;
  }

  .mold-info h4 {
    margin: 0 0 4px 0;
    font-size: 12px;
    font-weight: bold;
    color: #494437;
    word-break: break-word;
  }

  .mold-details {
    display: flex;
    gap: 12px;
    font-size: 10px;
    color: #888;
  }

  .download-btn {
    background-color: #fec84a;
    background-image: linear-gradient(#fedd8f, #fec94d);
    border: 1px solid #494437;
    border-radius: 4px;
    color: #494437;
    cursor: pointer;
    font-family: inherit;
    font-size: 10px;
    font-weight: bold;
    padding: 6px 12px;
    min-width: 70px;
    flex-shrink: 0;
  }

  .download-btn:hover {
    background-image: linear-gradient(#fec94d, #fedd8f);
  }


  .error {
    color: #d32f2f;
    font-weight: bold;
    text-align: center;
  }
</style>
