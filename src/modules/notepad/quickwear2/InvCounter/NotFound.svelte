<script>
  import sendEvent from '../../../analytics/sendEvent';
  import { ahSearchUrl } from '../../../support/constants';

  let { data = [] } = $props();
</script>

<div>
  Did not find:
  {#each data as { nickname, searchname }, index (index)}
    {#if index > 0},{/if}
    <a
      href="{ahSearchUrl}{searchname}"
      onclick={() => sendEvent('QuickWear', 'Not Found', searchname)}
      >{nickname}</a
    >
  {/each}
</div>
