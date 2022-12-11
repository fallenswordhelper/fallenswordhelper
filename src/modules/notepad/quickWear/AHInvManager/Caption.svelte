<script>
  import sendEvent from '../../../analytics/sendEvent';
  import { auctionSearchUrl } from '../../../support/constants';

  export let data = '';
</script>

<div>
  Items {data} from
  <a
    href="{auctionSearchUrl}"
    on:click={() => sendEvent('QuickWear', 'AH Quick Search', data)}
  >AH Quick Search</a>
  found in your inventory
</div>

<style>
  div {
    padding-bottom: 0.2em;
    text-align: center;
  }
</style>
