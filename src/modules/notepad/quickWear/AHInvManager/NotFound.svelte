<script>
  import sendEvent from '../../../analytics/sendEvent';
  import { ahSearchUrl } from '../../../support/constants';

  export let data = [];
</script>

<div>
  Did not find:
  {#each data as { nickname, searchname }, index}
    {#if index > 0},{/if}
    <a
      href="{ahSearchUrl}{searchname}"
      on:click={() => sendEvent('QuickWear', 'Not Found', searchname)}
    >{nickname}</a>
  {/each}
</div>
