<script>
  import ItemImg from '../../common/ItemImg.svelte';

  let { class: className = '', item = 0 } = $props();
</script>

<div class={className}>
  {#if item}
    <ItemImg {item} t="1" />
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
