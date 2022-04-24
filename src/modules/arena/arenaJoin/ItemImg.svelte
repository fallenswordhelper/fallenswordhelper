<script>
  import { cdn } from '../../system/system';
  import playerId from '../../common/playerId';

  let className = '';

  export { className as class };
  export let item;

  const src = (i) => `${cdn}items/${i.b}.gif`;
  const tipped = (i) => `fetchitem.php?item_id=${i.b}&inv_id=${i.a}&t=1&p=${playerId()}`;
</script>

<div class="{className}">
  {#if item}
    <img alt="{item.name}" src="{src(item)}" class="tip-dynamic" data-tipped="{tipped(item)}">
  {/if}
</div>

<style>
  .sml {
    background-image: url(https://cdn2.fallensword.com/ui/inventory/1x1.png);
    height: 30px;
    width: 30px;
  }
  .med {
    background-image: url(https://cdn2.fallensword.com/ui/inventory/2x2.png);
    height: 60px;
    width: 60px;
  }
  .lrg {
    background-image: url(https://cdn2.fallensword.com/ui/inventory/2x3.png);
    height: 90px;
    width: 60px;
  }
</style>
