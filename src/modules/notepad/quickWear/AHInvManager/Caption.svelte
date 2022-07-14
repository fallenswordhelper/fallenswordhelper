<script>
  import { auctionSearchUrl } from '../../../support/constants';

  export let data = '';
</script>

<div>
  Items {data} from <a href="${auctionSearchUrl}">AH Quick Search</a> found in your inventory
</div>

<style>
  div {
    padding-bottom: 0.2em;
    text-align: center;
  }
</style>
