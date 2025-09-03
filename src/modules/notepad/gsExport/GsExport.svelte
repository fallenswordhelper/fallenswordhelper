<script>
  import MoldDownload from './MoldDownload.svelte';
  import CsvExport from './CsvExport.svelte';
</script>

<div class="gs-export">
  <p>Export your Guild Store inventory data to a CSV file for analysis.</p>

  <MoldDownload />
  <CsvExport />
</div>

<style>
  .gs-export {
    padding: 16px;
    text-align: center;
  }

  .gs-export p {
    margin-bottom: 16px;
  }
</style>
