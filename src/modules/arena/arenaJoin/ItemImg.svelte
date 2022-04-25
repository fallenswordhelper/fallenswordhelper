<script>
  import { cdn } from '../../system/system';
  import playerId from '../../common/playerId';

  let className = '';

  export let item = 0;
  export { className as class };

  const src = (i) => `${cdn}items/${i.b}.gif`;
  const tipped = (i) => `fetchitem.php?item_id=${i.b}&inv_id=${i.a}&t=1&p=${playerId()}`;
</script>

<div class="{className}">
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
  .sml {
    min-height: 30px;
    min-width: 30px;
  }
  .med {
    min-height: 60px;
    min-width: 60px;
  }
  .lrg {
    min-height: 90px;
    min-width: 60px;
  }
</style>
