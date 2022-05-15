<script>
  import ItemImage from './ItemImage.svelte';
  import { itemType } from '../../support/constants';

  export let equipment = 0;

  const anItem = (eq, type) => eq && eq.find((i) => i.t === itemType.indexOf(type));
</script>

<div class="grid">
  <ItemImage class="med" item={anItem(equipment, 'Gloves')}/>
  <ItemImage class="med" item={anItem(equipment, 'Helmet')}/>
  <ItemImage class="sml" item={anItem(equipment, 'Amulet')}/>
  <ItemImage class="lrg" item={anItem(equipment, 'Weapon')}/>
  <ItemImage class="lrg" item={anItem(equipment, 'Armor')}/>
  <ItemImage class="lrg" item={anItem(equipment, 'Shield')}/>
  <ItemImage class="sml" item={anItem(equipment, 'Ring')}/>
  <ItemImage class="med" item={anItem(equipment, 'Boots')}/>
  <ItemImage class="sml" item={anItem(equipment, 'Rune')}/>
</div>

<style>
  .grid {
    align-items: center;
    display: grid;
    grid-template-columns: 60px 60px 60px;
    grid-template-rows: 60px 90px 60px;
    gap: 2px;
    justify-content: center;
    justify-items: center;
    padding-top: 2px;
  }
</style>
