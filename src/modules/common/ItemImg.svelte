<script>
  import { cdn } from '../system/system';
  import playerId from './playerId';

  export let item = 0;
  export let small = 0;
  export let t = 0;

  const composed = (i) => `${cdn}composing/${i.x.d}_${i.x.c}.png`;
  const basic = (i) => `${cdn}items/${i.b}.gif`;
  const src = (i) => (i.b === 13699 ? composed(i) : basic(i));
  const tipped = (i) => `fetchitem.php?item_id=${i.b}&inv_id=${i.a}&t=${t}&p=${playerId()}`;
</script>

<img alt="{item.n}" class:small class="tip-dynamic" data-tipped="{tipped(item)}" src="{src(item)}">

<style>
  .small {
    height: 30px;
    width: 30px;
  }
</style>