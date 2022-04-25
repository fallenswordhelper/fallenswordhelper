<script>
  import { cdn } from '../../system/system';
  import playerId from '../../common/playerId';

  export let item = 0;
  export let lrg = 0;

  const src = (i) => `${cdn}items/${i.b}.gif`;
  const tipped = (i) => `fetchitem.php?item_id=${i.b}&inv_id=${i.a}&t=1&p=${playerId()}`;
</script>

<div class:lrg>
  {#if item}
    <img alt="{item.name}" src="{src(item)}" class="tip-dynamic" data-tipped="{tipped(item)}">
  {/if}
</div>

<style>
  div {
    align-items: center;
    background-image: url(https://cdn2.fallensword.com/ui/inventory/2x3.png);
    display: flex;
  }
  .lrg {
    height: 90px;
  }
</style>
