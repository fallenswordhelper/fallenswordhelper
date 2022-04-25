<script>
  import ItemImage from './ItemImg.svelte';
  import { itemType } from '../../support/constants';

  export let equipment = 0;

  const anItem = (eq, type) => eq && eq.find((i) => i.t === itemType.indexOf(type));
</script>

<div class="grid">
  <ItemImage item={anItem(equipment, 'Gloves')}/>
  <ItemImage item={anItem(equipment, 'Helmet')}/>
  <ItemImage item={anItem(equipment, 'Amulet')}/>
  <ItemImage lrg={1} item={anItem(equipment, 'Weapon')}/>
  <ItemImage lrg={1} item={anItem(equipment, 'Armor')}/>
  <ItemImage lrg={1} item={anItem(equipment, 'Shield')}/>
  <ItemImage item={anItem(equipment, 'Ring')}/>
  <ItemImage item={anItem(equipment, 'Boots')}/>
  <ItemImage item={anItem(equipment, 'Rune')}/>
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
