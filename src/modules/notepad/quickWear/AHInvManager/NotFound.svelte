<script>
  import { ahSearchUrl } from '../../../support/constants';

  export let data = [];
</script>

<div>
  Did not find:
  {#each data as { nickname, searchname }, index}
    {#if index > 0},{/if}
    <a href="{ahSearchUrl}{searchname}">{nickname}</a>
  {/each}
</div>
