<script>
  import sendEvent from '../../../analytics/sendEvent';
  import { auctionSearchUrl } from '../../../support/constants';

  /**
   * @typedef {Object} Props
   * @property {string} [data]
   */

  /** @type {Props} */
  let { data = '' } = $props();
</script>

<div>
  Items {data} from
  <a
    href={auctionSearchUrl}
    onclick={() => sendEvent('QuickWear', 'AH Quick Search', data)}
    >AH Quick Search</a
  >
  found in your inventory
</div>

<style>
  div {
    padding-bottom: 0.2em;
    text-align: center;
  }
</style>
