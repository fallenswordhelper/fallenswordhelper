<script>
  import sendEvent from '../../../analytics/sendEvent';
  import { ahSearchUrl } from '../../../support/constants';

  export let data = {};
</script>

<div class="tr" class:odd={data.odd}>
  <div>{data.searchname}</div>
  <div>
    {#if data.nickname}
      <a
        href="{ahSearchUrl}{data.searchname}"
        on:click={() => sendEvent('QuickWear', 'Nick Name', data.searchname)}
      >{data.nickname}</a>
    {/if}
  </div>
  <div>{data.count}</div>
</div>

<style>
  .tr {
    display: grid;
    grid-template-columns: 40% 40% 20%;
  }
 .odd {
    background-color: rgba(0, 0, 0, 0.05);
  }
</style>
