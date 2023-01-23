<script>
import daBazaarBuy from '../_dataAccess/daBazaarBuy';
import dynamicAlert from '../alert/dynamicAlert';
import addCommas from '../system/addCommas';
import { cdn } from '../system/system';

export let potions = [];

async function buyButton(potion) {
  // eslint-disable-next-line no-param-reassign
  potion.promise = daBazaarBuy(potion.id, potion.count);
  const response = await potion.promise;
  if (response.s) {
    dynamicAlert(`You successfully purchased ${potion.count} "${response.r[0].n}"`);
  } else {
    dynamicAlert(response.e.message);
  }
}
</script>
<div id="bazaar">
  {#each potions as potion (potion.id)}
    <div class="potion">
      <img
        class="potion-img tip-dynamic"
        style="background: url('{cdn}ui/inventory/2x3.png')"
        src="{potion.img}"
        alt="Potion"
        data-tipped="{potion.fetch}"
      >
      <div class="prices">
        {addCommas(potion.price)}
        <img
          src="{cdn}currency/0.png"
          data-hasqtip="1"
          oldtitle="Gold"
          alt="Gold"
          title=""
          aria-describedby="qtip-1"
        >
        x
        <input
          type="number"
          bind:value={potion.count}
          min=1
          max=100
        ><br>
        = {addCommas(potion.price * potion.count)}
        <img
          src="{cdn}currency/0.png"
          alt="Gold"
          data-hasqtip="1"
          oldtitle="Gold"
          title=""
          aria-describedby="qtip-1"
        >
      </div>
      {#await potion.promise}
        <span class="fshSpinner fshSpinner12"></span>
      {:then}
        <button type="button" class="custombutton" on:click={buyButton(potion)}>Buy</button>
      {/await}
    </div>
  {/each}
</div>
<style>
#bazaar {
  text-align: center;
}
.potion-img {
  width: 60px;
  height: 90px;
  margin: 0px auto;
}
.potion {
  display: inline-block;
  width: 120px;
  text-align: center;
  margin: 12px;
}
.prices {
  margin-top: 6px;
  line-height: 2em;
}
.prices > img {
  display: inline-block;
}
input {
  width: 3.5em;
}
</style>
